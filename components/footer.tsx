'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FadeIn, RevealLine } from './motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Operational AI Integration', href: '/services/ai-tools' },
    { name: 'Custom AI Development', href: '/services/custom-software' },
    { name: 'AI Readiness Assessment', href: '/services/ai-consulting' },
    { name: 'Security & Compliance', href: '/services/cybersecurity' },
  ];

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="bg-[#0a0a0b] border-t border-zinc-800/50" role="contentinfo">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <FadeIn>
              <Link href="/" className="block mb-6">
                <Image
                  src="/logo-heading.png"
                  alt="Mentaris"
                  width={150}
                  height={35}
                />
              </Link>
              
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                AI implementation for compliance-heavy industries. Sydney, Australia.
              </p>

              <a 
                href="mailto:admin@mentaris.io"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>admin@mentaris.io</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </FadeIn>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-2.5">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.15}>
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2.5">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* CTA */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.2}>
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4">Start a Project</h3>
              <p className="text-sm text-zinc-500 mb-4">
                Book a free 30-minute assessment. No pitch, no pressure.
              </p>
              <Link
                href="/contact"
                className="btn-secondary text-sm"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>

      <RevealLine />
      <div className="container-narrow py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-zinc-600">
            <span>© {currentYear} Mentaris. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            {legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
