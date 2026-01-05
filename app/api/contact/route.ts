import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_EMAIL || 'admin@mentaris.io';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // If no Resend key, log and return success (dev mode)
    if (!RESEND_API_KEY) {
      console.log('Contact form submission:', { name, email, company, service, message });
      return NextResponse.json({ success: true, dev: true });
    }

    // Send via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Mentaris Contact <contact@mentaris.io>',
        to: TO_EMAIL,
        reply_to: email,
        subject: `New Contact: ${name}${company ? ` from ${company}` : ''}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend error:', error);
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
