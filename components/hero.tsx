'use client';

import Link from 'next/link';
import { ArrowRight, Building2, Flame, Heart, Wrench, Scale, Banknote } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { OrbitalRings } from '@/components/motion/orbital';

// hero v3 - added industry tags, restyled "we know" as cards
// the orbital adds visual interest without being too flashy

const industries = [
  { label: 'Construction', icon: Building2 },
  { label: 'Fire Safety', icon: Flame },
  { label: 'Healthcare', icon: Heart },
  { label: 'Engineering', icon: Wrench },
  { label: 'Legal', icon: Scale },
  { label: 'Finance', icon: Banknote },
];

// the "we know" pain points - now as cards instead of plain text
const painPoints = [
  {
    title: 'We know the late nights',
    desc: 'Reports at 10pm. Documentation backlogs. Compliance deadlines that never stop.',
  },
  {
    title: 'We know the bottlenecks',
    desc: 'Skilled people spending half their time on paperwork instead of actual work.',
  },
  {
    title: 'We know the pressure',
    desc: 'Stakeholders who want results yesterday. Auditors who want everything perfect.',
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* bg elements */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] 
                      bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />
      
      <div className="container-narrow relative z-10 pt-32 pb-20">
        {/* main hero content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <FadeIn>
              <span className="tech-badge mb-6 inline-block">
                AI Implementation · Sydney, Australia
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI implementation for businesses that can't afford to fall behind
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.15}>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Most AI consultants dazzle with demos and leave nothing usable. 
                We analyse operations, identify real opportunities, and implement 
                systems that actually work.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* orbital animation */}
          <FadeIn delay={0.25} className="hidden lg:flex justify-center">
            <OrbitalRings size="lg" speed="normal" />
          </FadeIn>
        </div>

        {/* industry tags */}
        <FadeIn delay={0.3}>
          <div className="border-t border-zinc-800 pt-8 mb-16">
            <p className="text-zinc-600 text-sm mb-4 uppercase tracking-wider">
              Industries we serve
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <div 
                  key={ind.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-sm
                             hover:border-zinc-700 hover:text-zinc-300 transition-colors"
                >
                  <ind.icon className="w-4 h-4" />
                  {ind.label}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* "We know..." cards - restyled from plain text */}
        <div className="border-t border-zinc-800 pt-12">
          <FadeIn delay={0.35}>
            <h2 className="text-2xl font-bold text-white mb-8">
              We've been where you are
            </h2>
          </FadeIn>
          
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <StaggerItem key={idx}>
                <div className="precision-panel p-6 h-full group hover:border-cyan-400/30 transition-colors">
                  {/* subtle top accent */}
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent mb-4 
                                  group-hover:w-12 transition-all duration-300" />
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.5}>
            <p className="text-zinc-400 mt-8 max-w-2xl">
              That's why we started Mentaris. Not to sell AI for the sake of it, but to 
              implement solutions that actually reduce the documentation burden and let 
              your team focus on work that matters.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
