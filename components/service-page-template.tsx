"use client";
'use client';

import Link from 'next/link';
import { ArrowRight, ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem, RevealLine, ShiftOnHover } from './motion';
import { NodeCluster } from './motion/orbital';

interface ServicePageProps {
  title: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  features: {
    title: string;
    description: string;
    icon?: LucideIcon;
  }[];
  benefits: string[] | { title: string; description: string }[];
  process: {
    step?: string;
    title: string;
    description: string;
  }[];
  relatedServices?: {
    title: string;
    href: string;
    icon: LucideIcon;
  }[];
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  benefits,
  process,
  relatedServices,
}: ServicePageProps) {
  return (
    <main className="bg-[#111113] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
        
        {/* Accent glow */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
        
        <div className="container-narrow relative">
          {/* Back link */}
          <FadeIn>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Services
            </Link>
          </FadeIn>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Icon and subtitle */}
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-zinc-800/50 border border-cyan-400/30">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  {subtitle && (
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">{subtitle}</span>
                  )}
                </div>
              </FadeIn>
              
              {/* Title */}
              <FadeIn delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                  {title}
                </h1>
              </FadeIn>
              
              {/* Description */}
              <FadeIn delay={0.15}>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  {description}
                </p>
              </FadeIn>
              
              {/* CTA */}
              <FadeIn delay={0.2}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="#process" className="btn-secondary">
                    View Process
                  </Link>
                </div>
              </FadeIn>
            </div>
            
            {/* Visual element */}
            <FadeIn delay={0.3} direction="right" className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="instrument-card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-mono text-xs text-zinc-500">service.status: active</span>
                  </div>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-600 w-24">service:</span>
                      <span className="text-cyan-400">&quot;{title}&quot;</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-600 w-24">features:</span>
                      <span className="text-zinc-400">{features.length} modules</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-600 w-24">process:</span>
                      <span className="text-zinc-400">{process.length} phases</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-zinc-800">
                    <NodeCluster className="mx-auto" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <RevealLine />

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-4 bg-cyan-400" />
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">What&apos;s Included</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-12">
              Features & capabilities
            </h2>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="precision-panel p-6 h-full">
                  {feature.icon && (
                    <feature.icon className="w-5 h-5 text-cyan-400 mb-4" />
                  )}
                  <h3 className="font-semibold text-zinc-200 mb-2">{feature.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-[#0a0a0b]">
        <div className="container-narrow">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-4 bg-amber-400" />
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Our Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              How we work
            </h2>
            <p className="text-zinc-500 max-w-xl mb-12">
              A structured approach that ensures quality, transparency, and results at every stage.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-amber-400/50 via-zinc-700 to-transparent hidden md:block" />
            
            <StaggerChildren className="space-y-8">
              {process.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="flex gap-6 md:gap-8 group">
                    {/* Step number */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-zinc-900 border border-zinc-700 group-hover:border-amber-400/50 flex items-center justify-center transition-colors">
                        <span className="font-mono text-sm text-zinc-500 group-hover:text-amber-400 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-2">
                      <h3 className="font-semibold text-zinc-200 mb-2">{step.title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-4 bg-emerald-400" />
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Benefits</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Why choose this service
              </h2>
              <p className="text-zinc-500">
                Tangible outcomes that drive real business value.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-3">
                {benefits.map((benefit, index) => {
                  const benefitText = typeof benefit === 'string' ? benefit : benefit.title;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 hover:border-emerald-400/30 transition-colors"
                    >
                      <div className="p-1 bg-emerald-400/10 border border-emerald-400/30">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-zinc-300">{benefitText}</span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 bg-[#0a0a0b]">
          <div className="container-narrow">
            <FadeIn>
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-6">Related Services</h3>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedServices.map((service, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <ShiftOnHover>
                    <Link 
                      href={service.href}
                      className="flex items-center gap-4 p-4 bg-zinc-900/30 border border-zinc-800 hover:border-cyan-400/30 transition-colors group"
                    >
                      <service.icon className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                      <span className="text-zinc-400 group-hover:text-white transition-colors">{service.title}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:text-cyan-400 ml-auto transition-colors" />
                    </Link>
                  </ShiftOnHover>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Ready to get started?
              </h2>
              <p className="text-zinc-500 mb-8">
                Let&apos;s discuss how we can help you achieve your goals with {title.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Other Services
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
