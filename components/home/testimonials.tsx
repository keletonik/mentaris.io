'use client';

import { FadeIn, StaggerChildren, StaggerItem } from '../motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Mentaris transformed our data infrastructure. Their ML models reduced our processing time by 60% and gave us insights we didn't know we needed.",
      author: 'Sarah Chen',
      role: 'CTO',
      company: 'TechVentures',
    },
    {
      quote: "The security audit they conducted was thorough and actionable. We fixed critical vulnerabilities before they became problems.",
      author: 'Michael Torres',
      role: 'Security Director',
      company: 'FinanceCore',
    },
    {
      quote: "Working with Mentaris felt like having an extended engineering team. They understood our constraints and delivered on time.",
      author: 'Emma Williams',
      role: 'Product Lead',
      company: 'StartupX',
    },
  ];

  return (
    <section className="section-padding bg-[#111113] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/3 rounded-full blur-[150px]" />
      
      <div className="container-narrow relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Client Feedback</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4">
              Trusted by teams that <span className="text-gradient-cyan">build</span>
            </h2>
          </FadeIn>
        </div>

        {/* Testimonials Grid */}
        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="h-full precision-panel p-6 flex flex-col">
                {/* Quote icon */}
                <Quote className="w-6 h-6 text-cyan-400/30 mb-4" />
                
                {/* Quote text */}
                <blockquote className="text-zinc-300 text-sm leading-relaxed flex-grow mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                {/* Author */}
                <div className="pt-4 border-t border-zinc-800">
                  <p className="font-medium text-sm text-zinc-200">{testimonial.author}</p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
