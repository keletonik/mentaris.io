'use client';

import { FadeIn } from '@/components/motion';

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 border-t border-zinc-800/50">
      <div className="container-narrow">
        <div className="max-w-4xl">
          {/* Heading */}
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              Operations experience meets{' '}
              <span className="text-gradient-cyan">AI expertise.</span>
            </h2>
          </FadeIn>
          
          {/* Body Content */}
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Mentaris wasn't founded by developers who learned business from a textbook.
              </p>
              
              <p>
                Our background is in the trenches — managing teams, handling compliance, running operations, and answering to stakeholders who only care about results. Years in fire safety, engineering compliance, and operational leadership taught us how businesses actually run: the messy spreadsheets, the manual processes everyone hates, the compliance headaches that eat entire weeks.
              </p>
              
              <p>
                Now we use that experience to help businesses implement AI where it matters.
              </p>
              
              <div className="py-6 space-y-3">
                <p className="text-zinc-300">We know which problems AI can solve and which ones it can't.</p>
                <p className="text-zinc-300">We know how to get buy-in from teams who are skeptical of new tools.</p>
                <p className="text-zinc-300">We know the difference between a cool demo and a production system.</p>
              </div>
              
              <p>
                That's what you're getting — not tech consultants who've never run a business, but people who've done your job and now help you do it better.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
