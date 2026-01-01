import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { validateContactForm } from '@/lib/security';
import { sendContactEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

// Rate limiter for contact form (5 submissions per hour per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_SUBMISSIONS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Comprehensive validation and sanitization
    const validation = validateContactForm(body);
    
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    const { name, email, company, service, message } = validation.sanitized!;

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        company: company || null,
        service: service || null,
        message,
        status: 'new',
      },
    });

    // Send email notifications
    const emailResult = await sendContactEmail({
      name,
      email,
      company: company || undefined,
      service: service || undefined,
      message,
    });

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      // Still return success to user since data is saved
      // Email failure shouldn't block the submission
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for contacting us! We\'ll get back to you within 24 hours.',
        id: submission.id,
        emailSent: emailResult.success
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
