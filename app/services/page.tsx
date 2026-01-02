'use client';

import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowRight, 
  Cpu, 
  Code2, 
  Search, 
  Shield 
} from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { NodeCluster } from '@/components/motion/orbital';

// v2 - trimmed to 4 core services
// removed: machine-learning, data-analytics, malware-analysis
// these can be mentioned within the 4 main services if needed

const services = [
  {
    slug: 'ai-tools',
    icon: Cpu,
    title: 'Operational AI Integration',
    shortDesc: 'Find and implement the right AI tools for your workflows',
    longDesc: 'Most businesses don\'t need custom AI — they need existing tools configured properly. We identify the right solutions for document processing, customer service, reporting, and data analysis, then integrate them with your existing systems.',
    features: [
      'Tool evaluation and selection',
      'Integration with existing systems',
      'Team training and onboarding',
      'Ongoing optimisation',
    ],
  },
  {
    slug: 'custom-software',
    icon: Code2,
    title: 'Custom AI Development',
    shortDesc: 'When off-the-shelf doesn\'t cut it',
    longDesc: 'For workflows that need something specific, we build custom solutions. Custom models trained on your data, automation pipelines, integrations that connect everything together. Built to your specifications, maintained long-term.',
    features: [
      'Custom model development',
      'Process automation',
      'API integrations',
      'Ongoing maintenance',
    ],
  },
  {
    slug: 'ai-consulting',
    icon: Search,
    title: 'AI Readiness Assessment',
    shortDesc: 'Understand where AI can actually help',
    longDesc: 'Before implementing anything, you need to know what\'s worth building. We analyse your operations, interview your team, and deliver a clear report: where AI will help, where it won\'t, and what you should prioritise.',
    features: [
      'Operations analysis',
      'Opportunity identification',
      'Cost-benefit estimates',
      'Implementation roadmap',
    ],
  },
  {
    slug: 'cybersecurity',
    icon: Shield,
    title: 'Security & Compliance',
    shortDesc: 'AI implementation done right from day one',
    longDesc: 'AI implementation in regulated industries requires careful attention to data security, privacy, and compliance. We build systems with security baked in — proper access controls, audit trails, and documentation that satisfies auditors.',
    features: [
      'Compliance-first architecture',
      'Data privacy controls',
      'Audit trail implementation',
      'Security assessment',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#111113] min-h-screen">
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-narrow">
          <FadeIn>
            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-zinc-300">Services</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Practical AI implementation for businesses that need results, not demos. 
              From assessment to deployment to ongoing support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-8">
        <div className="container-narrow">
          <StaggerChildren className="space-y-8">
            {services.map((service, idx) => (
              <StaggerItem key={service.slug}>
                <Link 
                  href={`/services/${service.slug}`}
                  className="precision-panel p-8 flex flex-col lg:flex-row gap-8 group"
                >
                  {/* icon + visual */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4 
                                    group-hover:bg-cyan-400/20 transition-colors">
                      <service.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    
                    {/* subtle visual element */}
                    <div className="hidden lg:block mt-4">
                      <NodeCluster className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-cyan-400/80 text-sm mb-4">{service.shortDesc}</p>
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                      {service.longDesc}
                    </p>

                    {/* features */}
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                          <span className="w-1 h-1 rounded-full bg-cyan-400" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* cta */}
                    <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-zinc-900/30">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                How we work
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Every engagement follows the same core process, scaled to fit your needs.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discover', desc: 'Understand your operations, pain points, and goals' },
              { num: '02', title: 'Assess', desc: 'Identify where AI can make a real difference' },
              { num: '03', title: 'Implement', desc: 'Build and deploy the right solution' },
              { num: '04', title: 'Optimise', desc: 'Monitor, refine, and scale what works' },
            ].map((step, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <span className="text-3xl font-bold text-cyan-400/30">{step.num}</span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-2">{step.title}</h3>
                  <p className="text-zinc-500 text-sm">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center py-12 border-t border-zinc-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Not sure which service you need?
              </h2>
              <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                Start with a conversation. We'll help you figure out the right approach.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
