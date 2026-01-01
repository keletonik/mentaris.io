'use client';

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

export default function BlogPage() {
  const posts = [
    {
      title: 'What AI Can and Can\'t Do for Small Businesses in 2026',
      excerpt: 'A practical guide to understanding where AI delivers real value and where the hype falls short.',
      date: 'January 2026',
      href: '/blog/ai-capabilities-2026',
      category: 'AI Strategy',
      readTime: '10 min',
    },
    {
      title: '5 Signs Your Business Is Ready for AI (And 3 Signs It Isn\'t)',
      excerpt: 'How to know if your business is actually ready to benefit from AI implementation.',
      date: 'January 2026',
      href: '/blog/ai-readiness-signs',
      category: 'AI Strategy',
      readTime: '12 min',
    },


  ];

  return (
    <main className="bg-[#111113] min-h-screen">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
        
        <div className="container-narrow relative">
          <FadeIn>
            <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">Blog</span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6">
              Insights & <span className="text-gradient-cyan">Articles</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <p className="text-lg text-zinc-400 max-w-xl mb-16">
              Practical perspectives on AI implementation for business.
            </p>
          </FadeIn>

          <StaggerChildren>
            <div className="space-y-4">
              {posts.map((post) => (
                <StaggerItem key={post.title}>
                  <Link href={post.href} className="block group">
                    <div className="p-6 bg-zinc-900/50 border border-zinc-800 hover:border-cyan-400/30 transition-all">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="px-2 py-1 text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20">
                              {post.category}
                            </span>
                            <span className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span className="text-xs text-zinc-600 font-mono">
                              {post.readTime}
                            </span>
                          </div>
                          <h2 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                            {post.title}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </h2>
                          <p className="text-zinc-500">{post.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>
    </main>
  );
}
