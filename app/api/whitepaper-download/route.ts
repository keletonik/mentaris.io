import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { validateInput, sanitizeString } from '@/lib/security';

// POST /api/whitepaper-download
// captures email before whitepaper download
// stores in db for future follow-up

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, subscribe } = body;

    // validate email - this is the only required field
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // run through security validation
    const emailValidation = validateInput(email, 'email');
    if (!emailValidation.isValid) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }

    // sanitize inputs
    const cleanEmail = sanitizeString(email.toLowerCase().trim());
    const cleanName = firstName ? sanitizeString(firstName.trim()) : null;

    // store in database
    // upsert so we don't create duplicates if same person downloads twice
    await prisma.whitepaperDownload.upsert({
      where: { email: cleanEmail },
      update: {
        firstName: cleanName,
        subscribe: subscribe ?? true,
        downloadCount: { increment: 1 },
        lastDownloadAt: new Date(),
      },
      create: {
        email: cleanEmail,
        firstName: cleanName,
        subscribe: subscribe ?? true,
        downloadCount: 1,
        lastDownloadAt: new Date(),
      },
    });

    // could also send to mailchimp/convertkit here if needed
    // left as TODO for now - just storing in our db

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Whitepaper download capture failed:', error);
    // don't block the download even if db fails
    return NextResponse.json({ success: true });
  }
}
