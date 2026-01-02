'use client';

import { FadeIn, StaggerChildren, StaggerItem, RevealLine } from '@/components/motion';

// how it works - 4 step process
// kept simple, no fluff

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn your operations inside out. What works, what doesn\'t, where time disappears.',
    detail: 'Interviews, observation, data review. Usually 1-2 weeks.',
  },
  {
    num: '02',
    title: 'Assessment',
    desc: 'We identify where AI can actually help — and where it won\'t. No overselling.',
    detail: 'Written report with recommendations, costs, realistic timelines.',
  },
  {
    num: '03',
    title: 'Implementation',
    desc: 'We build and deploy the solution. Off-the-shelf tools or custom development.',
    detail: 'You\'re involved at every step. No black boxes.',
  },
  {
    num: '04',
    title: 'Optimisation',
    desc: 'We monitor, refine, and scale. AI systems need ongoing attention.',
    detail: 'Monthly reviews, model retraining, continuous improvement.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="tech-badge mb-4 inline-block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How we work
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A straightforward process that gets you from "should we use AI?" 
              to "this is saving us 20 hours a week."
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* connecting line - visible on desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-zinc-800" />
          
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <StaggerItem key={idx}>
                <div className="relative">
                  {/* step number with connecting dot */}
                  <div className="relative z-10 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 
                                    flex items-center justify-center">
                      <span className="text-cyan-400 font-mono text-sm font-bold">{step.num}</span>
                    </div>
                    {/* connecting dot for the line */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                    w-3 h-3 rounded-full bg-cyan-400/30 border border-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400 mb-3 leading-relaxed">{step.desc}</p>
                  <p className="text-zinc-600 text-sm">{step.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <RevealLine className="mx-auto mb-6 max-w-md" />
            <p className="text-zinc-500 text-sm">
              Timeline varies by scope. Assessment takes 2-3 weeks. 
              Full implementations range from 1-6 months.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
