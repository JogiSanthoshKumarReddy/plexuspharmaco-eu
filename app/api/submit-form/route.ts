import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Create a Nodemailer transporter using SMTP
    // You will need to set these environment variables in your deployment environment
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
        const formattedKey = key
          .replace(/^form_/, '')
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        emailHtml += `<tr><td><strong>${formattedKey}</strong></td><td>${value}</td></tr>`;
      }
    }
    emailHtml += '</table>';

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || '"Plexuspharmaco Website" <noreply@plexuspharmaco.com>',
      to: process.env.SMTP_TO_EMAIL || 'info@plexuspharmaco.com',
      subject: `New Website Enquiry: ${formType}`,
      html: emailHtml,
    };

    // If SMTP_USER is configured, send the email. Otherwise, mock success (for development).
    if (process.env.SMTP_USER) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Mock email sent (SMTP not configured):', mailOptions);
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
