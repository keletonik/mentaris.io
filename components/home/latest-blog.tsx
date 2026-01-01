'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem, ShiftOnHover } from '../motion';

export default function LatestBlog() {
  const posts = [
    {
      title: 'What AI Can and Can\'t Do for Small Businesses in 2026',
      excerpt: 'A practical guide to understanding where AI delivers real value and where the hype falls short.',
      category: 'AI Strategy',
      readTime: '10 min read',
      href: '/blog/ai-capabilities-2026',
    },
    {
      title: '5 Signs Your Business Is Ready for AI',
      excerpt: 'How to know if your business is actually ready to benefit from AI implementation.',
      category: 'AI Strategy',
      readTime: '12 min read',
      href: '/blog/ai-readiness-signs',
    },
    {
      title: 'AI Implementation Success Stories',
      excerpt: 'Real-world examples of successful AI adoption in business.',
      category: 'Case Studies',
      readTime: '8 min read',
      href: '/blog/ai-implementation-success',
    },
  ];

  return (
    <section className="section-padding bg-[#0d0d0f]">
      <div className="container-narrow">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-4 bg-cyan-400" />
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Latest from our <span className="text-gradient-cyan">blog</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link href="/blog" className="btn-ghost group">
              All articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        {/* Posts Grid */}
        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <StaggerItem key={index}>
              <ShiftOnHover>
                <Link href={post.href} className="block group">
                  <article className="instrument-card p-6 h-full flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="tech-badge text-[10px]">{post.category}</span>
                      <span className="flex items-center gap-1 text-xs text-zinc-600">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-semibold text-zinc-200 group-hover:text-cyan-400 transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-zinc-500 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    
                    {/* Read more */}
                    <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                      <span className="text-xs font-medium text-zinc-400 group-hover:text-cyan-400 transition-colors">
                        Read article
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
  );
}
