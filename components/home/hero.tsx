'use client';

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[100px]" />
      
      <div className="container-narrow relative pt-20 pb-16">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              AI implementation for businesses that{' '}
              <span className="text-gradient-cyan">can't afford to fall behind.</span>
            </h1>
          </FadeIn>
          
          {/* Subtext */}
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-3xl">
              Most AI consultants dazzle with demos and leave you with nothing usable. Mentaris does the opposite. We analyse your operations, identify where AI creates real value, and implement it — whether that's off-the-shelf tools configured properly or custom solutions built for your workflow. No fluff. No pilot projects that go nowhere. Just systems that work.
            </p>
          </FadeIn>
          
          {/* CTAs */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="btn-primary text-base px-8 py-4"
              >
                Book a Free 30-Minute Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#how-it-works" 
                className="btn-secondary text-base px-8 py-4"
              >
                How It Works
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
