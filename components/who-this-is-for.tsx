'use client';

import Link from 'next/link';
import { ArrowRight, Check, Building2 } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

// who this is for - ideal client section
// helps visitors self-qualify

const idealClientChecks = [
  'You have real operational complexity that creates documentation burden',
  'Decisions get made quickly — no 18-month procurement processes',
  'You\'re tired of consultants who dazzle with demos but deliver nothing usable',
  'You want to see ROI, not just "innovation" for its own sake',
  'Your team is open to new tools if they actually save time',
  'You operate in a compliance-heavy industry (or want to get there)',
];

const notRightFor = [
  'Enterprise companies with year-long vendor approval processes',
  'Businesses looking for an AI strategy PDF to impress the board',
  'Projects that need to look impressive but not actually work',
];

export default function WhoThisIsFor() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="tech-badge mb-4 inline-block">Is This You?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We work best with
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Small to mid-sized businesses — companies big enough to have real complexity, 
              but lean enough that decisions get made quickly.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* good fit */}
          <FadeIn delay={0.1}>
            <div className="precision-panel p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Good fit</h3>
              </div>

              <StaggerChildren className="space-y-3">
                {idealClientChecks.map((check, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{check}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </FadeIn>

          {/* not right fit */}
          <FadeIn delay={0.2}>
            <div className="precision-panel p-8 h-full border-zinc-800/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-zinc-500" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-400">Might not be the best fit</h3>
              </div>

              <div className="space-y-3 mb-6">
                {notRightFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-zinc-600 mt-1">—</span>
                    <span className="text-zinc-500 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-zinc-600 text-sm">
                No judgement — we've just learned where we can deliver the most value. 
                If you're not sure, we're happy to chat and figure it out together.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
