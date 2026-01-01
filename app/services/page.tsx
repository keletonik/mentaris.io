'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Brain, Code, Shield, BarChart3, Cpu, Search, Wrench } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem, ShiftOnHover, RevealLine } from '@/components/motion';

export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: 'AI Tools',
      description: 'Custom AI applications tailored to your business processes. Chatbots, automation, and intelligent workflows.',
      href: '/services/ai-tools',
      category: 'Development',
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Bespoke software solutions built for scale, performance, and reliability. Web, mobile, and enterprise systems.',
      href: '/services/custom-software',
      category: 'Development',
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'End-to-end ML solutions from data preparation to model deployment. Predictive analytics and deep learning.',
      href: '/services/machine-learning',
      category: 'AI/ML',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights. Dashboards, reporting, and business intelligence.',
      href: '/services/data-analytics',
      category: 'Data',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions. Audits, penetration testing, and protection strategies.',
      href: '/services/cybersecurity',
      category: 'Security',
    },
    {
      icon: Search,
      title: 'Malware Analysis',
      description: 'Deep threat intelligence and malware reverse engineering. Protect your systems with expert analysis.',
      href: '/services/malware-analysis',
      category: 'Security',
    },
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic AI advisory services. Roadmap development, technology selection, and implementation guidance.',
      href: '/services/ai-consulting',
      category: 'Strategy',
    },
  ];

  return (
    <main className="bg-[#111113] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
        
        <div className="container-narrow relative">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-4 bg-cyan-400" />
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Our Services</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              What we <span className="text-gradient-cyan">build</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <p className="text-lg text-zinc-400 max-w-xl mb-8">
              End-to-end solutions from concept to deployment, built with modern technologies and engineering best practices.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link href="/contact" className="btn-primary">
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <RevealLine />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <ShiftOnHover>
                  <Link href={service.href} className="block group h-full">
                    <article className="precision-panel p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="p-3 bg-zinc-800/50 border border-zinc-700 group-hover:border-cyan-400/30 transition-colors">
                          <service.icon className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <span className="tech-badge text-[10px]">{service.category}</span>
                      </div>
                      
                      {/* Content */}
                      <h2 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-zinc-500 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      
                      {/* Footer */}
                      <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                        <span className="text-xs font-medium text-zinc-400 group-hover:text-cyan-400 transition-colors">
                          Learn more
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </article>
                  </Link>
                </ShiftOnHover>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0b]">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Not sure which service you need?
              </h2>
              <p className="text-zinc-500 mb-8">
                We can help you identify the right solution for your business challenges. Book a free consultation to discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources" className="btn-secondary">
                  Browse Resources
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
