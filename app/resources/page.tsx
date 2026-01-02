'use client';

import Link from 'next/link';
import { FileText, Download, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/motion';

export default function ResourcesPage() {
  const whitepapers = [
    {
      id: 'llm-architectures',
      title: 'Large Language Model Architectures: Security, Implementation and Enterprise Deployment',
      author: 'Casper Tavitian',
      description: 'An in-depth research paper examining LLM architectures through the dual lens of technical foundations and security vulnerabilities. Covers transformer mechanics, deployment strategies, prompt injection defences, and responsible AI governance for enterprise environments.',
      pages: 35,
      readTime: '60 min read',
      category: 'Research Paper',
      date: 'January 2025',
      downloadUrl: '/whitepapers/llm-architectures-guide.pdf',
    }
  ];

  return (
    <main className="bg-[#111113] min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        
        <div className="container-narrow relative text-center">
          <FadeIn>
            <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">Resources</span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6">
              Knowledge <span className="text-gradient-cyan">Centre</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Comprehensive resources to help you navigate the world of artificial intelligence and drive business transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="container-narrow">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-semibold">White Papers</h2>
            </div>
          </FadeIn>
          
          {whitepapers.map((paper) => (
            <FadeIn key={paper.id} delay={0.1}>
              <div className="p-6 md:p-8 bg-zinc-900/50 border border-zinc-800 hover:border-cyan-400/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="px-2 py-1 text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-4 inline-block">
                      {paper.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-cyan-400/80 mb-3">By {paper.author} · {paper.date}</p>
                    <p className="text-zinc-400 mb-4 text-sm">{paper.description}</p>
                    <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
                      <span>{paper.pages} pages</span>
                      <span className="text-zinc-700">|</span>
                      <span>{paper.readTime}</span>
                    </div>
                  </div>
                  <a
                    href={paper.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-zinc-800/50">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-3xl font-semibold mb-4">
              Need Custom <span className="text-gradient-cyan">AI Solutions</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Our team can help you implement tailored AI strategies for your business.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact" className="btn-primary">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
