import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

// Distributed Rate Limiter setup (Fallback to memory map if no KV configured)
let ratelimit: Ratelimit | null = null;
try {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    ratelimit = new Ratelimit({
      redis: new Redis({
        url: process.env.KV_REST_API_URL,
        token: process.env.KV_REST_API_TOKEN,
      }),
      limiter: Ratelimit.slidingWindow(3, "1 m"),
      analytics: true,
    });
  }
} catch (e) {
  console.warn("Failed to initialize Upstash Redis rate limiter", e);
}

const fallbackRateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

// Basic HTML Sanitization for XSS prevention
function sanitizeHtml(str: string): string {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Magic Bytes check for PDF, DOC, DOCX
function isValidMagicBytes(buffer: Buffer, mimetype: string): boolean {
  if (buffer.length < 4) return false;
  
  // PDF: %PDF (25 50 44 46)
  if (mimetype === 'application/pdf') {
    return buffer[0] === 0x25 && buffer[1] === 0x50 && buffer[2] === 0x44 && buffer[3] === 0x46;
  }
  
  // DOCX: PK.. (50 4B 03 04)
  if (mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    return buffer[0] === 0x50 && buffer[1] === 0x4B && buffer[2] === 0x03 && buffer[3] === 0x04;
  }
  
  // DOC: D0 CF 11 E0 (Legacy OLE)
  if (mimetype === 'application/msword') {
    return buffer[0] === 0xD0 && buffer[1] === 0xCF && buffer[2] === 0x11 && buffer[3] === 0xE0;
  }
  
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    
    if (ip !== 'unknown') {
      if (ratelimit) {
        // Use Distributed Rate Limiter
        const { success } = await ratelimit.limit(ip);
        if (!success) {
          return NextResponse.json(
            { success: false, message: 'Too many requests. Please try again later.' },
            { status: 429 }
          );
        }
      } else {
        // Use Memory Fallback
        const timestamps = fallbackRateLimitMap.get(ip) || [];
        const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
        
        if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            { success: false, message: 'Too many requests. Please try again later.' },
            { status: 429 }
          );
        }
        
        validTimestamps.push(now);
        fallbackRateLimitMap.set(ip, validTimestamps);
      }
    }

    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, string> = {};
    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
    
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          if (value.size > 0 && value.name) {
            // Strict Size Limit (5MB)
            if (value.size > 5 * 1024 * 1024) {
              return NextResponse.json({ success: false, message: `File ${value.name} exceeds 5MB limit` }, { status: 400 });
            }

            // Allowed Extensions & Mime Types
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            const allowedExts = ['.pdf', '.doc', '.docx'];
            const ext = value.name.slice((value.name.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
            const fileType = value.type || 'application/octet-stream';

            if (!allowedTypes.includes(fileType) || !allowedExts.includes('.' + ext)) {
              return NextResponse.json({ success: false, message: `Invalid file type for ${value.name}. Allowed: PDF, DOC, DOCX` }, { status: 400 });
            }

            const buffer = Buffer.from(await value.arrayBuffer());
            
            // Validate Magic Bytes (File Signature)
            if (!isValidMagicBytes(buffer, fileType)) {
              return NextResponse.json({ success: false, message: `File signature mismatch for ${value.name}. Potentially spoofed file.` }, { status: 400 });
            }

            attachments.push({
              filename: value.name,
              content: buffer,
              contentType: fileType
            });
          }
        } else {
          data[key] = String(value);
        }
      }
    } else {
      data = await request.json();
    }
    
    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Build the email content based on the submitted form data
    const formType = data.formType || 'Contact Form Submission';
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://plexuspharmaco.eu';
    
    // Helper to format keys
    const formatKey = (key: string) => sanitizeHtml(
      key.replace(/^form_/, '').split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    );
    
    // Group fields logically
    const contactFields = ['form_name', 'company_name', 'form_email', 'form_country'];
    const businessFields = ['inquiry_type'];
    const excludeFields = ['formType', 'consent', 'form_message', ...contactFields, ...businessFields];
    
    // Get additional fields that aren't explicitly handled
    const additionalFields = Object.keys(data).filter(key => !excludeFields.includes(key));
    
    // Generate HTML for a group of fields using table rows for maximum email client compatibility
    const generateFieldsHtml = (fields: string[]) => {
      let html = '';
      for (const key of fields) {
        if (data[key]) {
          html += `
            <tr>
              <td width="35%" style="padding: 12px 15px; border-bottom: 1px solid #eeeeee; font-size: 13px; font-weight: bold; color: #555555; vertical-align: top; text-transform: uppercase; letter-spacing: 0.5px;">${formatKey(key)}</td>
              <td width="65%" style="padding: 12px 15px; border-bottom: 1px solid #eeeeee; font-size: 15px; color: #1a1a1a; vertical-align: top;">${sanitizeHtml(String(data[key]))}</td>
            </tr>
          `;
        }
      }
      return html;
    };
    
    const contactHtml = generateFieldsHtml(contactFields);
    const businessHtml = generateFieldsHtml(businessFields);
    const additionalHtml = generateFieldsHtml(additionalFields);
    
    const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const timeStr = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
    
    let emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Website Enquiry</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f0f4f8; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; line-height: 1.6; color: #333333;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f0f4f8; padding: 40px 20px;">
        <tr>
          <td align="center">
            <!-- Main Container -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 650px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
              
              <!-- Header -->
              <tr>
                <td style="background-color: #0b3d91; padding: 35px 40px; text-align: center; border-bottom: 4px solid #0056b3;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: bold; letter-spacing: 0.5px;">Plexuspharmaco GmbH</h1>
                  <p style="color: #a4bce6; margin: 8px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px;">Website Enquiry Notification</p>
                </td>
              </tr>
              
              <!-- Introduction -->
              <tr>
                <td style="padding: 40px 40px 20px 40px;">
                  <h2 style="margin: 0 0 15px 0; font-size: 20px; color: #1a1a1a; font-weight: 600;">${sanitizeHtml(formType)}</h2>
                  <p style="margin: 0; font-size: 15px; color: #555555; line-height: 1.6;">A new business enquiry has been submitted through the Plexuspharmaco website. The information submitted by the visitor is provided below for your review and follow-up.</p>
                </td>
              </tr>
              
              <!-- Contact Information -->
              ${contactHtml ? `
              <tr>
                <td style="padding: 20px 40px 10px 40px;">
                  <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #0b3d91; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">CONTACT INFORMATION</h3>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; border-top: 1px solid #eeeeee;">
                    ${contactHtml}
                  </table>
                </td>
              </tr>
              ` : ''}
              
              <!-- Business Information -->
              ${businessHtml ? `
              <tr>
                <td style="padding: 10px 40px 10px 40px;">
                  <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #0b3d91; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">BUSINESS INFORMATION</h3>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; border-top: 1px solid #eeeeee;">
                    ${businessHtml}
                  </table>
                </td>
              </tr>
              ` : ''}
              
              <!-- Additional Information -->
              ${additionalHtml ? `
              <tr>
                <td style="padding: 10px 40px 10px 40px;">
                  <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #0b3d91; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">ADDITIONAL INFORMATION</h3>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; border-top: 1px solid #eeeeee;">
                    ${additionalHtml}
                  </table>
                </td>
              </tr>
              ` : ''}
              
              <!-- Message Section -->
              ${data.form_message ? `
              <tr>
                <td style="padding: 20px 40px 30px 40px;">
                  <h3 style="margin: 0 0 15px 0; font-size: 15px; color: #0b3d91; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">MESSAGE</h3>
                  <div style="background-color: #f8fafc; border-left: 4px solid #0b3d91; padding: 20px; font-size: 15px; color: #333333; line-height: 1.6; border-radius: 0 4px 4px 0;">
                    ${sanitizeHtml(String(data.form_message)).replace(/\n/g, '<br>')}
                  </div>
                </td>
              </tr>
              ` : ''}
              
              <!-- Action Button -->
              ${data.form_email ? `
              <tr>
                <td style="padding: 10px 40px 40px 40px; text-align: center;">
                  <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#0b3d91">
                        <a href="mailto:${encodeURIComponent(data.form_email)}?subject=Re:%20Your%20enquiry%20to%20Plexuspharmaco%20GmbH" target="_blank" style="font-size: 15px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 4px; padding: 14px 28px; border: 1px solid #0b3d91; display: inline-block; font-weight: bold;">Reply to Enquirer</a>
                      </td>
                    </tr>
                  </table>
                  <div style="margin-top: 20px;">
                    <a href="${siteUrl}" style="font-size: 14px; color: #0b3d91; text-decoration: underline;">View Website</a>
                  </div>
                </td>
              </tr>
              ` : ''}
              
              <!-- Submission Info -->
              <tr>
                <td style="padding: 20px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="font-size: 12px; color: #64748b; line-height: 1.5;">
                        <strong>Submitted on:</strong> ${dateStr} at ${timeStr}<br>
                        <strong>Source:</strong> Plexuspharmaco Website<br>
                        <strong>Consent:</strong> The user has agreed to the privacy policy.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #1e293b; padding: 35px 40px; text-align: center;">
                  <h4 style="color: #ffffff; margin: 0 0 8px 0; font-size: 16px; font-weight: 600; letter-spacing: 0.5px;">Plexuspharmaco GmbH</h4>
                  <p style="color: #94a3b8; margin: 0 0 24px 0; font-size: 13px;">Advancing pharmaceutical solutions through quality, innovation and collaboration.</p>
                  
                  <p style="color: #64748b; margin: 0 0 20px 0; font-size: 12px;">
                    <a href="${siteUrl}" style="color: #cbd5e1; text-decoration: none;">Website</a> &nbsp;&nbsp;|&nbsp;&nbsp; 
                    <a href="${siteUrl}/en/business-enquiry" style="color: #cbd5e1; text-decoration: none;">Contact</a> &nbsp;&nbsp;|&nbsp;&nbsp; 
                    <a href="${siteUrl}/en/privacy-policy" style="color: #cbd5e1; text-decoration: none;">Privacy Policy</a>
                  </p>
                  
                  <p style="color: #475569; margin: 0; font-size: 11px;">
                    &copy; ${new Date().getFullYear()} Plexuspharmaco GmbH. All rights reserved.
                  </p>
                </td>
              </tr>
              
            </table>
            <!-- End Main Container -->
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || '"Plexuspharmaco Website" <noreply@plexuspharmaco.eu>',
      to: process.env.SMTP_TO_EMAIL || 'info@plexuspharmaco.eu',
      subject: `New Website Enquiry: ${formType}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined
    };

    // If SMTP_USER is configured, send the email. Otherwise, mock success for demo purposes.
    if (process.env.SMTP_USER) {
      const info = await transporter.sendMail(mailOptions);
      if (process.env.SMTP_HOST?.includes('ethereal.email')) {
        console.log('Test email sent. Preview URL:', nodemailer.getTestMessageUrl(info));
      }

    } else {
      console.warn('DEMO MODE: SMTP_USER is not configured. Simulating successful email send to:', mailOptions.to);
      // Simulate 1 second network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
