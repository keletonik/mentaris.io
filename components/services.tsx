'use client';

import Link from 'next/link';
import { Cpu, Code2, Search, Shield, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { NodeCluster } from '@/components/motion/orbital';

// homepage services section - shows the 4 core services
// matches the services page - only 4, not 7

const services = [
  {
    slug: 'ai-tools',
    icon: Cpu,
    title: 'Operational AI Integration',
    desc: 'Find and implement the right AI tools for your workflows. Document processing, customer service, reporting, analysis.',
    accent: 'cyan',
  },
  {
    slug: 'custom-software',
    icon: Code2,
    title: 'Custom AI Development',
    desc: 'When off-the-shelf doesn\'t cut it. Custom models, automation, integrations built specifically for your processes.',
    accent: 'amber',
  },
  {
    slug: 'ai-consulting',
    icon: Search,
    title: 'AI Readiness Assessment',
    desc: 'Clear picture of where AI will help and where it won\'t. Written report with recommendations and realistic timelines.',
    accent: 'emerald',
  },
  {
    slug: 'cybersecurity',
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'AI implementation done right for regulated industries. Proper controls, audit trails, documentation that satisfies auditors.',
    accent: 'cyan',
  },
];

// color mapping for accents
const accentColors = {
  cyan: { bg: 'bg-cyan-400/10', text: 'text-cyan-400', border: 'hover:border-cyan-400/30' },
  amber: { bg: 'bg-amber-400/10', text: 'text-amber-400', border: 'hover:border-amber-400/30' },
  emerald: { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'hover:border-emerald-400/30' },
};

export default function Services() {
  return (
    <section className="section-padding bg-zinc-900/30">
      <div className="container-narrow">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="tech-badge mb-4 inline-block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Practical AI implementation
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              From assessment to deployment to ongoing support. 
              No pilot projects that go nowhere — just systems that work.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const colors = accentColors[service.accent as keyof typeof accentColors];
            
            return (
              <StaggerItem key={service.slug}>
                <Link 
                  href={`/services/${service.slug}`}
                  className={`precision-panel p-6 h-full flex flex-col group ${colors.border} transition-colors`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <service.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    
                    {/* subtle decoration */}
                    <div className="opacity-40 group-hover:opacity-70 transition-opacity">
                      <NodeCluster />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-4">
                    {service.desc}
                  </p>
                  
                  <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
