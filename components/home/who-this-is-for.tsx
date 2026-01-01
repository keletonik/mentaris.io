'use client';

import { FadeIn } from '@/components/motion';
import { ArrowRight } from 'lucide-react';

export default function WhoThisIsFor() {
  const idealClients = [
    'Know AI is important but don\'t know where to start',
    'Have tried AI tools and found them underwhelming',
    'Are watching competitors automate while they\'re stuck in spreadsheets',
    'Need a partner who understands business, not just technology',
    'Want implementation, not just advice',
  ];

  return (
    <section className="py-20 lg:py-28 border-t border-zinc-800/50">
      <div className="container-narrow">
        <div className="max-w-4xl">
          {/* Heading */}
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              Is this <span className="text-gradient-cyan">for you?</span>
            </h2>
          </FadeIn>
          
          {/* Intro */}
          <FadeIn delay={0.1}>
            <p className="text-lg text-zinc-400 mb-8">
              Mentaris works best with business owners and operators who:
            </p>
          </FadeIn>
          
          {/* List */}
          <FadeIn delay={0.2}>
            <div className="space-y-4 mb-10">
              {idealClients.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-zinc-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          
          {/* Additional Context */}
          <FadeIn delay={0.3}>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>
                We work with small to mid-sized businesses — companies big enough to have real operational complexity, but lean enough that decisions get made quickly.
              </p>
              <p>
                Enterprise procurement processes and 18-month timelines aren't our thing. Businesses that want to move fast and see results? That's where we thrive.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
