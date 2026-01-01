'use client';

import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { FadeIn } from '@/components/motion';

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 border-t border-zinc-800/50">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Let's figure out if AI can{' '}
              <span className="text-gradient-cyan">help your business.</span>
            </h2>
          </FadeIn>
          
          {/* Body */}
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-zinc-400 text-lg mb-10">
              <p>
                Book a free 30-minute call. No pitch deck, no pressure. Just a conversation about your operations and where AI might fit.
              </p>
              <p>
                If there's a clear opportunity, we'll tell you.<br />
                If there isn't, we'll tell you that too.
              </p>
            </div>
          </FadeIn>
          
          {/* CTAs */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link 
                href="/contact" 
                className="btn-primary text-base px-8 py-4"
              >
                Book Your Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <p className="text-zinc-500">
              Or reach out directly:{' '}
              <a 
                href="mailto:admin@mentaris.io" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                admin@mentaris.io
              </a>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
