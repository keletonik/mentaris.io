'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { FadeIn } from './motion';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string | number;
  author: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
  excerpt?: string;
  image?: string;
  category?: string;
}

export default function BlogPostTemplate({
  title,
  date,
  readTime,
  author,
  content,
  children,
  image,
  category,
}: BlogPostProps) {
  const bodyContent = children || content;
  return (
    <main className="bg-[#111113] min-h-screen">
      <article className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
        
        <div className="container-narrow relative max-w-3xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 font-mono mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mb-8">
              {category && (
                <span className="px-2 py-1 text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-4 inline-block">
                  {category}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 mb-6">{title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 font-mono">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {typeof readTime === 'number' ? `${readTime} min read` : readTime}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Written by {author}
                </span>
              </div>
            </div>
          </FadeIn>

          {image && (
            <FadeIn delay={0.15}>
              <div className="relative aspect-video mb-10 bg-zinc-900 border border-zinc-800 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.2}>
            <div className="prose prose-invert prose-lg max-w-none
              prose-headings:font-semibold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-zinc-400 prose-p:leading-relaxed
              prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-ul:text-zinc-400 prose-ol:text-zinc-400
              prose-li:my-1
              prose-code:text-cyan-400 prose-code:bg-zinc-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-zinc-800
              prose-blockquote:border-l-cyan-400 prose-blockquote:text-zinc-400"
            >
              {bodyContent}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-16 pt-8 border-t border-zinc-800">
              <Link href="/blog" className="btn-secondary">
                <ArrowLeft className="w-4 h-4" />
                More Articles
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>
    </main>
  );
}
