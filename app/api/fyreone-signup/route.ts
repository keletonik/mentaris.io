import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_EMAIL || 'admin@mentaris.io';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // If no Resend key, log and return success (dev mode)
    if (!RESEND_API_KEY) {
      console.log('FyreOne beta signup:', email);
      return NextResponse.json({ success: true, dev: true });
    }

    // Notify you of new signup
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'FyreOne <fyreone@mentaris.io>',
        to: TO_EMAIL,
        subject: `New FyreOne Beta Signup: ${email}`,
        html: `
          <h2>New FyreOne Beta Signup</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        `,
      }),
    });

    // Send confirmation to user
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'FyreOne <fyreone@mentaris.io>',
        to: email,
        subject: "You're on the FyreOne beta list",
        html: `
          <h2>Thanks for signing up!</h2>
          <p>You're on the early access list for FyreOne AI.</p>
          <p>We'll be in touch when the mobile beta launches in Q1 2026.</p>
          <br>
          <p>— The Mentaris Team</p>
          <p><a href="https://mentaris.io">mentaris.io</a></p>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('FyreOne signup error:', error);
    return NextResponse.json(
      { error: 'Failed to sign up. Please try again.' },
      { status: 500 }
    );
  }
}
