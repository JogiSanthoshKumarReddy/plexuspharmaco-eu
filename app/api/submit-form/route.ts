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
      from: process.env.SMTP_FROM_EMAIL || '"Plexuspharmaco Website" <noreply@plexuspharmaco.eu>',
      to: process.env.SMTP_TO_EMAIL || 'info@plexuspharmaco.eu',
      subject: `New Website Enquiry: ${formType}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined
    };

    // If SMTP_USER is configured, send the email. Otherwise, mock success for demo purposes.
    if (process.env.SMTP_USER) {
      await transporter.sendMail(mailOptions);
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
