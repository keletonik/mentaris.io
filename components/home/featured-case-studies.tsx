'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function FeaturedCaseStudies() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const caseStudies = [
    {
      slug: 'fintech-ai-transformation',
      client: 'GlobalPay Financial',
      industry: 'FinTech',
      title: 'AI-Powered Transaction Monitoring System',
      description: 'Reduced fraud detection time by 85% while improving accuracy to 99.2%',
      image: 'https://cdn.abacus.ai/images/b34f2a7a-5072-48bd-96c5-2901a1b24643.jpg',
      metrics: ['85% faster', '99.2% accuracy', '$2.4M saved'],
    },
    {
      slug: 'healthcare-diagnostics-ai',
      client: 'MedTech Innovations',
      industry: 'Healthcare',
      title: 'Medical Imaging AI Assistant',
      description: 'Enhanced diagnostic accuracy and reduced analysis time for radiologists',
      image: 'https://cdn.abacus.ai/images/c9c7778e-cdd5-4f15-a1ed-0e41e06e13ec.jpg',
      metrics: ['94% accuracy', '60% time saved', '10K+ scans'],
    },
    {
      slug: 'retail-analytics-platform',
      client: 'RetailHub Corporation',
      industry: 'Retail',
      title: 'Predictive Analytics for Inventory Management',
      description: 'Optimized inventory levels and increased sales through data-driven insights',
      image: 'https://cdn.abacus.ai/images/f88aeece-feb8-4a81-a2e7-ff9ef4bd62b8.jpg',
      metrics: ['32% cost reduction', '45% sales increase', '98% stock accuracy'],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped companies transform with AI.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies?.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link href={`/case-studies/${study?.slug ?? ''}`}>
                <div className="glass rounded-2xl overflow-hidden hover:glass-strong hover:shadow-2xl hover:shadow-[#0066FF]/30 transition-all group cursor-pointer h-full">
                  <div className="relative h-48 bg-gray-800">
                    <Image
                      src={study?.image ?? ''}
                      alt={study?.title ?? ''}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#00d4ff] text-[#0a0a0a] text-xs font-bold rounded-full">
                      {study?.industry ?? ''}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#00d4ff] font-semibold mb-2">
                      {study?.client ?? ''}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00d4ff] transition-colors">
                      {study?.title ?? ''}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {study?.description ?? ''}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study?.metrics?.map((metric, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#0066FF]/20 to-[#00d4ff]/20 text-[#00d4ff] text-xs font-semibold rounded-full"
                        >
                          <TrendingUp className="w-3 h-3" />
                          {metric}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-[#00d4ff] text-sm font-semibold">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 glass text-white rounded-lg hover:glass-strong transition-all text-lg font-semibold"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
