'use client';

import { Check, X } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

// why choose us - differentiation section
// this is about what makes mentaris different from generic ai consultants

const differentiators = [
  {
    us: 'Operations experience meets AI expertise',
    them: 'Engineers who learned business from textbooks',
  },
  {
    us: 'Honest about what AI can and can\'t do',
    them: 'Oversell capabilities to close deals',
  },
  {
    us: 'Implementation focus, not just strategy',
    them: 'Leave you with a PDF and an invoice',
  },
  {
    us: 'Fixed-scope projects with clear deliverables',
    them: 'Open-ended hourly billing',
  },
  {
    us: 'Long-term partnership approach',
    them: 'Build and disappear',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-zinc-900/30">
      <div className="container-narrow">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="tech-badge mb-4 inline-block">Why Mentaris</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not your typical AI consultants
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We've been on the client side. We know what it's like to hire consultants 
              who talk a good game and deliver nothing useful.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="precision-panel p-8 overflow-hidden">
            {/* header row */}
            <div className="grid grid-cols-2 gap-4 mb-6 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="text-white font-semibold">Mentaris</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-zinc-500" />
                </div>
                <span className="text-zinc-500 font-semibold">Typical Consultants</span>
              </div>
            </div>

            {/* comparison rows */}
            <StaggerChildren className="space-y-4">
              {differentiators.map((diff, idx) => (
                <StaggerItem key={idx}>
                  <div className="grid grid-cols-2 gap-4 py-3 border-b border-zinc-800/50 last:border-0">
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{diff.us}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-500 text-sm">{diff.them}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              Founded by people who've managed teams, handled compliance, run operations, 
              and answered to stakeholders who only care about results.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
