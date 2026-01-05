'use client';

import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

// latest blog - shows 3 most recent articles
// these should match actual blog posts that exist

const blogPosts = [
  {
    slug: 'ai-capabilities-2026',
    title: 'What AI Can Actually Do in 2026',
    excerpt: 'Cutting through the hype. What modern AI is genuinely good at, what it struggles with, and how to set realistic expectations.',
    author: 'Casper Tavitian',
    date: 'January 2026',
    readTime: '8 min',
    category: 'Industry',
  },
  {
    slug: 'ai-readiness-signs',
    title: '5 Signs Your Business Is Ready for AI',
    excerpt: 'Not every business needs AI right now. Here\'s how to tell if you\'re actually ready to benefit from implementation.',
    author: 'Casper Tavitian',
    date: 'January 2026',
    readTime: '6 min',
    category: 'Strategy',
  },
  {
    slug: 'ai-implementation-success',
    title: 'Why Most AI Projects Fail (And How to Avoid It)',
    excerpt: 'The gap between AI demo and AI value is where most projects die. A practical guide to crossing that gap.',
    author: 'Casper Tavitian',
    date: 'January 2026',
    readTime: '10 min',
    category: 'Implementation',
  },
];

export default function LatestBlog() {
  return (
    <section className="section-padding bg-zinc-900/30">
      <div className="container-narrow">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="tech-badge mb-4 inline-block">Insights</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Latest from the blog
              </h2>
            </div>
            <Link 
              href="/blog"
              className="hidden sm:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link 
                href={`/blog/${post.slug}`}
                className="precision-panel p-6 h-full flex flex-col group"
              >
                <span className="tech-badge mb-3">{post.category}</span>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-zinc-400 text-sm mb-4 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-zinc-500 pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="text-center mt-8 sm:hidden">
            <Link 
              href="/blog"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
