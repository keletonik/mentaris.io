'use client';

import Link from 'next/link';
import { ArrowRight, Cog, Code, Search, Shield } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

export default function Services() {
  const services = [
    {
      icon: Cog,
      title: 'Operational AI Integration',
      description: 'Finding the right AI tools for your specific workflows and implementing them properly. Document processing, customer service automation, data analysis, reporting — the stuff that eats up your team\'s time.',
      href: '/services/ai-tools',
    },
    {
      icon: Code,
      title: 'Custom AI Development',
      description: 'When off-the-shelf doesn\'t cut it. Custom models, integrations, and automation built specifically for your business processes.',
      href: '/services/custom-software',
    },
    {
      icon: Search,
      title: 'AI Readiness Assessment',
      description: 'Not sure where to start? We\'ll analyse your operations and give you a clear picture of where AI can help — and where it can\'t.',
      href: '/services/ai-consulting',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'AI implementation done wrong creates risk. We build systems with security and compliance in mind from day one — especially important for businesses in regulated industries.',
      href: '/services/cybersecurity',
    },
  ];

  return (
    <section className="py-20 lg:py-28 border-t border-zinc-800/50 bg-zinc-900/30">
      <div className="container-narrow">
        {/* Heading */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            What we <span className="text-gradient-cyan">do.</span>
          </h2>
        </FadeIn>
        
        {/* Services Grid */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link 
                href={service.href}
                className="group block p-6 md:p-8 bg-zinc-900/50 border border-zinc-800 hover:border-cyan-400/30 transition-all h-full"
              >
                <div className="p-3 bg-zinc-800/50 border border-zinc-700 w-fit mb-5 group-hover:border-cyan-400/30 transition-colors">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
