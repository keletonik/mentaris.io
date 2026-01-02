'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/motion';
import { OrbitalRings } from '@/components/motion/orbital';

// final cta - bottom of homepage
// simple, direct, no fluff

export default function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn>
          <div className="precision-panel p-12 md:p-16 relative overflow-hidden">
            {/* bg elements */}
            <div className="absolute inset-0 blueprint-grid opacity-20" />
            <div className="absolute -right-20 -bottom-20 opacity-30 hidden lg:block">
              <OrbitalRings size="lg" speed="slow" />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to see what AI can actually do for your business?
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Start with a conversation. No sales pitch, no commitment. 
                We'll tell you honestly whether we can help.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources" className="btn-secondary">
                  Browse Resources
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
