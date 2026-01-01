'use client';

import { ArrowLeft, CheckCircle, TrendingUp, DollarSign, Book } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

export default function MeasuringROI() {
  const lessons = [
    {
      number: 1,
      title: 'Establishing Baseline Metrics',
      duration: '11 min',
      content: [
        'Measuring AI ROI begins before implementation. Establish comprehensive baseline measurements of current performance across all metrics you intend to improve. Without baselines, attributing improvements to AI becomes speculative.',
        'Document not just primary metrics but also secondary effects. An AI system that improves customer service response times might also impact customer satisfaction, retention rates, and support costs. Comprehensive baselines enable complete ROI assessment.',
        'Consider both quantitative and qualitative baselines. While financial metrics provide clear ROI calculations, qualitative factors like decision quality, risk management, and competitive positioning also create value that deserves measurement, even if quantification proves challenging.'
      ]
    },
    {
      number: 2,
      title: 'Calculating Direct Financial Impact',
      duration: '13 min',
      content: [
        'Direct cost savings represent the most straightforward AI ROI component. Calculate labor reductions, efficiency improvements, waste elimination, and error reduction. Be realistic—AI rarely eliminates entire job categories but often enables workers to focus on higher-value activities.',
        'Revenue impact requires careful attribution. Did AI-driven recommendations truly increase sales, or were other factors involved? Use control groups when possible. Compare regions or customer segments with and without AI to isolate its effect.',
        'Consider ongoing costs against one-time investments. AI systems require continuous data pipeline maintenance, model retraining, infrastructure costs, and monitoring. Total Cost of Ownership calculations should extend several years into the future to capture these recurring expenses.'
      ]
    },
    {
      number: 3,
      title: 'Quantifying Risk Reduction and Quality Improvements',
      duration: '12 min',
      content: [
        'Risk reduction creates real value even when difficult to quantify precisely. Fraud detection systems prevent losses that would otherwise occur. Compliance monitoring reduces regulatory penalties. Predictive maintenance prevents costly equipment failures. Estimate the financial impact of risks prevented.',
        'Quality improvements affect multiple business dimensions. Better demand forecasting reduces inventory costs and stockouts. Improved customer targeting increases marketing ROI. Enhanced diagnostic accuracy improves patient outcomes. Trace quality improvements through their business impact chains.',
        'Some benefits resist easy quantification but still matter strategically. Faster decision-making, improved innovation cycles, and enhanced competitive positioning create value that may only become apparent over longer time horizons. Document these benefits even when precise quantification proves elusive.'
      ]
    }
  ];

  const roiMetrics = [
    {
      category: 'Cost Reduction',
      icon: DollarSign,
      metrics: ['Labor hour savings and reallocation', 'Process efficiency improvements', 'Waste and error reduction', 'Operational cost decreases']
    },
    {
      category: 'Revenue Impact',
      icon: TrendingUp,
      metrics: ['Sales growth from better targeting', 'Customer retention improvements', 'New product/service opportunities', 'Pricing optimization gains']
    }
  ];

  const takeaways = [
    'Establish comprehensive baseline metrics before AI implementation to enable accurate impact measurement',
    'Calculate direct financial impacts including cost savings, revenue improvements, and efficiency gains',
    'Quantify risk reduction benefits even when precise measurement proves challenging',
    'Include ongoing costs in Total Cost of Ownership calculations, not just initial implementation expenses',
    'Document strategic benefits that resist easy quantification but still create long-term value'
  ];

  return (
    <main className="bg-[#111113] min-h-screen">
      {/* Header */}
      <section className="relative py-20 lg:py-24 overflow-hidden border-b border-zinc-800/50">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
        
        <div className="container-narrow relative max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Knowledge Centre
            </Link>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-zinc-800/50 border border-cyan-400/30">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="px-2 py-1 text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20">
                Learning Module
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 mb-4">
              Measuring AI ROI
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-zinc-400">
              Methodologies for quantifying the business impact of artificial intelligence investments.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <StaggerChildren>
            <div className="space-y-8">
              {lessons.map((lesson) => (
                <StaggerItem key={lesson.number}>
                  <div className="p-6 md:p-8 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-zinc-800 border border-cyan-400/30 flex items-center justify-center font-mono text-cyan-400">
                          {lesson.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-xl font-semibold text-white">{lesson.title}</h2>
                          <span className="text-xs text-zinc-500 flex items-center gap-1 font-mono">
                            <Book className="w-3 h-3" />
                            {lesson.duration}
                          </span>
                        </div>
                        <div className="space-y-4">
                          {lesson.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-zinc-400 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>

          {/* ROI Metrics */}
          <FadeIn delay={0.25}>
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-8">ROI Measurement Framework</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {roiMetrics.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="p-5 bg-zinc-900/50 border border-zinc-800">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-zinc-800 border border-cyan-400/30">
                          <Icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <h4 className="font-semibold text-white">{category.category}</h4>
                      </div>
                      <ul className="space-y-2">
                        {category.metrics.map((metric, mIndex) => (
                          <li key={mIndex} className="flex items-start gap-2 text-zinc-500 text-sm">
                            <span className="text-cyan-400 mt-0.5">→</span>
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Example ROI Calculation */}
          <FadeIn delay={0.28}>
            <div className="mt-12 p-6 md:p-8 bg-zinc-900/30 border border-zinc-800">
              <h3 className="text-lg font-semibold mb-6">Example: Customer Service AI</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-mono text-cyan-400 uppercase mb-3">Costs (Year 1)</h4>
                  <div className="space-y-2 text-sm text-zinc-400">
                    <div className="flex justify-between"><span>Implementation</span><span className="font-mono">$150,000</span></div>
                    <div className="flex justify-between"><span>Training & Integration</span><span className="font-mono">$50,000</span></div>
                    <div className="flex justify-between"><span>Annual Licensing</span><span className="font-mono">$40,000</span></div>
                    <div className="flex justify-between pt-2 border-t border-zinc-700 font-semibold text-white">
                      <span>Total Cost</span><span className="font-mono">$240,000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-cyan-400 uppercase mb-3">Benefits (Annual)</h4>
                  <div className="space-y-2 text-sm text-zinc-400">
                    <div className="flex justify-between"><span>Labor Cost Reduction</span><span className="font-mono">$180,000</span></div>
                    <div className="flex justify-between"><span>Improved Response Time</span><span className="font-mono">$75,000</span></div>
                    <div className="flex justify-between"><span>Customer Retention</span><span className="font-mono">$95,000</span></div>
                    <div className="flex justify-between pt-2 border-t border-zinc-700 font-semibold text-white">
                      <span>Total Benefit</span><span className="font-mono">$350,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-cyan-400/10 border border-cyan-400/20">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Year 1 Net Benefit</span>
                  <span className="text-xl font-bold text-cyan-400">$110,000</span>
                </div>
                <div className="flex justify-between items-center mt-2 text-sm text-zinc-400">
                  <span>ROI: <span className="text-cyan-400">46%</span></span>
                  <span>Payback: <span className="text-cyan-400">8 months</span></span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Key Takeaways */}
          <FadeIn delay={0.3}>
            <div className="mt-16 p-6 md:p-8 bg-zinc-900/30 border border-zinc-800">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {takeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <span className="text-cyan-400 mt-1">→</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </article>

      {/* Navigation */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/resources/knowledge/ai-implementation" className="btn-secondary">
              <ArrowLeft className="w-4 h-4" />
              Previous: AI Implementation
            </Link>
            <Link href="/resources" className="btn-primary">
              Back to Knowledge Centre
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
