'use client';

import Link from 'next/link';
import { ArrowRight, Users, Target, Lightbulb, Shield, MapPin, Zap, Code } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { OrbitalRings } from '@/components/motion/orbital';

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying at the forefront of technology to deliver cutting-edge solutions.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security embedded in everything we build, not added as an afterthought.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Working closely with clients, treating their success as our own.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Holding ourselves to the highest standards in every project.',
    },
  ];



  return (
    <main className="bg-[#111113] min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        
        <div className="container-narrow relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">About Mentaris</span>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6">
                  Building intelligent systems for{' '}
                  <span className="text-gradient-cyan">forward-thinking</span> businesses
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.15}>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  Based in Sydney, Mentaris is a technology consultancy specializing in AI solutions, 
                  custom software development, and cybersecurity services.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <Link href="/contact" className="btn-primary">
                  Work With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.3}>
              <div className="relative aspect-square hidden lg:block">
                <OrbitalRings />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>



      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <FadeIn>
                <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase">Our Story</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl font-semibold mt-4 mb-6">Why we exist</h2>
              </FadeIn>
              <StaggerChildren>
                <StaggerItem>
                  <p className="text-zinc-400 mb-4">
                    Mentaris was founded with a clear mission: to help businesses harness the power 
                    of artificial intelligence and modern software development practices.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-zinc-400 mb-4">
                    We noticed that many organizations struggle to implement AI effectively—either 
                    due to lack of technical expertise or difficulty translating business needs into 
                    technical solutions.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-zinc-400">
                    That's where we come in. We bridge the gap between cutting-edge technology and 
                    practical business applications, delivering solutions that make a real impact.
                  </p>
                </StaggerItem>
              </StaggerChildren>
            </div>
            
            <FadeIn delay={0.2}>
              <div className="bg-zinc-900/50 border border-zinc-800 p-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500">company_info.json</span>
                </div>
                <pre className="font-mono text-sm text-zinc-400 overflow-x-auto">
{`{
  "name": "Mentaris",
  "location": "Sydney, Australia",
  "focus": [
    "AI Solutions",
    "Custom Software",
    "Cybersecurity"
  ],
  "status": "operational"
}`}
                </pre>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-zinc-900/30">
        <div className="container-narrow">
          <FadeIn>
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase">Our Values</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-semibold mt-4 mb-12">What drives us</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={0.1 + index * 0.1}>
                <div className="group p-6 bg-zinc-900/50 border border-zinc-800 hover:border-cyan-400/30 transition-colors">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 p-3 bg-zinc-800/50 border border-zinc-700 group-hover:border-cyan-400/30 transition-colors">
                      <value.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-zinc-500">{value.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-3xl font-semibold mb-4">Let's work together</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Ready to start a conversation about your next project?
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
