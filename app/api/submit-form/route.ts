import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const rateLimitMap = new Map<string, number[]>();
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

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    
    if (ip !== 'unknown') {
      const timestamps = rateLimitMap.get(ip) || [];
      const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
      
      if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          { success: false, message: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      
      validTimestamps.push(now);
      rateLimitMap.set(ip, validTimestamps);
    }

    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, string> = {};
    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
    
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          if (value.size > 0 && value.name) {
            const buffer = Buffer.from(await value.arrayBuffer());
            attachments.push({
              filename: value.name,
              content: buffer,
              contentType: value.type || 'application/octet-stream'
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
    let emailHtml = `<h2>New Submission: ${formType}</h2>`;
    emailHtml += '<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">';
    
    for (const [key, value] of Object.entries(data)) {
      if (key !== 'formType') {
        // Format key (e.g. form_name -> Form Name)
        const formattedKey = sanitizeHtml(
          key
            .replace(/^form_/, '')
            .split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        );
        
        const safeValue = sanitizeHtml(String(value));
        emailHtml += `<tr><td><strong>${formattedKey}</strong></td><td>${safeValue}</td></tr>`;
      }
    }
    emailHtml += '</table>';

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || '"Plexuspharmaco Website" <noreply@plexuspharmaco.com>',
      to: process.env.SMTP_TO_EMAIL || 'info@plexuspharmaco.com',
      subject: `New Website Enquiry: ${formType}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined
    };

    // If SMTP_USER is configured, send the email. Otherwise, mock success (for development).
    if (process.env.SMTP_USER) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Mock email sent (SMTP not configured):', mailOptions);
      if (attachments.length > 0) {
        console.log(`Included ${attachments.length} attachments. First attachment: ${attachments[0].filename} (${attachments[0].content.length} bytes)`);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form. Please try again later.', error: (error as Error).message },
      { status: 500 }
    );
  }
}
