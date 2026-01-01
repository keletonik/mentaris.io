'use client';

import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'A 30-minute conversation about what\'s slowing you down, where your team spends too much time, and what keeps you up at night. We ask questions about your workflows, your tools, your pain points. No charge. No obligation. Just a conversation.',
    },
    {
      number: '02',
      title: 'Analysis',
      description: 'We dig into your operations and identify 2-3 areas where AI can make a measurable difference. Not theoretical improvements — specific, practical implementations with clear ROI. You get a written report with recommendations, estimated costs, and realistic timelines.',
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We handle the build. That might mean configuring existing AI tools for your workflow, building custom automation, or integrating AI into your current systems. No PDF handoffs. We build it, test it, train your team, and make sure it actually works.',
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'AI tools need tuning. Workflows change. We stick around to make adjustments, answer questions, and ensure you\'re getting value long-term.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 border-t border-zinc-800/50 bg-zinc-900/30">
      <div className="container-narrow">
        {/* Heading */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">
            A straightforward <span className="text-gradient-cyan">process.</span>
          </h2>
        </FadeIn>
        
        {/* Steps */}
        <StaggerChildren className="space-y-12">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-mono text-3xl text-cyan-400/60">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="md:col-span-10">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </div>
              
              {/* Divider */}
              {index < steps.length - 1 && (
                <div className="h-px bg-zinc-800/50 mt-12" />
              )}
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
