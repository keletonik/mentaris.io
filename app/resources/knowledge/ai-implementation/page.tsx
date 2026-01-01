'use client';

import { ArrowLeft, CheckCircle, Lightbulb, Book, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

export default function AIImplementation() {
  const lessons = [
    {
      number: 1,
      title: 'Defining Clear Business Objectives',
      duration: '10 min',
      content: [
        'The most critical step in AI implementation is defining specific, measurable business objectives before selecting technologies. Too many organizations fall into the trap of "AI for AI\'s sake" without clear value propositions.',
        'Strong objectives identify specific processes to improve, decisions to enhance, costs to reduce, or revenue opportunities to capture. Weak objectives merely express interest in "exploring AI" or "becoming more data-driven."',
        'Frame objectives in business terms that non-technical stakeholders understand. Instead of "implement machine learning for customer data," aim for "reduce customer churn by 15% through predictive analytics." This clarity drives better decision-making throughout the project.'
      ]
    },
    {
      number: 2,
      title: 'Assessing Organizational Readiness',
      duration: '12 min',
      content: [
        'Successful AI implementation requires certain organizational prerequisites. Data infrastructure must be mature enough to support AI workloads. This means having data pipelines, governance frameworks, and quality standards already established.',
        'Evaluate your team\'s technical capabilities honestly. AI projects require diverse skills: data engineering, model development, domain expertise, project management, and change management. Few organizations possess all necessary skills internally.',
        'Cultural readiness matters as much as technical readiness. Organizations must embrace data-driven decision-making, tolerate experimentation and failure, and commit to iterative improvement. Without these cultural elements, even technically sound AI projects struggle to generate value.'
      ]
    },
    {
      number: 3,
      title: 'The Pilot-to-Production Framework',
      duration: '15 min',
      content: [
        'Begin with focused pilot projects that demonstrate value quickly. Choose use cases important enough to matter but not so critical that failures would be catastrophic. Ideal pilots have clear success metrics, manageable scope, and committed stakeholders.',
        'Design pilots to generate organizational learning, not just technical proofs of concept. What data challenges emerge? How do teams collaborate? What integration complexities arise? These insights prove valuable for future projects.',
        'Establish clear criteria for promoting pilots to production. Define minimum performance thresholds, integration requirements, operational readiness standards, and business value expectations. Many organizations struggle with perpetual piloting—either scale successful experiments or shut them down decisively.'
      ]
    },
    {
      number: 4,
      title: 'Building Cross-Functional Teams',
      duration: '14 min',
      content: [
        'AI success requires diverse expertise working in concert. Data scientists bring technical modeling skills. Domain experts ensure business relevance. Data engineers build robust pipelines. Product managers translate between technical and business stakeholders.',
        'Don\'t underestimate the importance of change management specialists. AI implementations often require significant process changes, new ways of working, and shifts in decision-making authority. Technical success means nothing if users resist adoption.',
        'Consider partnership models for capability gaps. Many organizations adopt hybrid approaches—maintaining internal AI strategy and governance while partnering with specialists for specific capabilities. The right model depends on AI\'s strategic importance and your talent market position.'
      ]
    }
  ];

  const implementationSteps = [
    {
      phase: 'Discovery',
      activities: ['Identify business problems and opportunities', 'Assess data availability and quality', 'Evaluate organizational capabilities', 'Define success criteria and metrics']
    },
    {
      phase: 'Design',
      activities: ['Select appropriate AI approaches', 'Design data architecture and pipelines', 'Plan integration requirements', 'Define governance and monitoring frameworks']
    },
    {
      phase: 'Development',
      activities: ['Prepare and clean training data', 'Build and train initial models', 'Conduct rigorous testing and validation', 'Develop monitoring and maintenance procedures']
    },
    {
      phase: 'Deployment',
      activities: ['Integrate with existing systems', 'Implement operational monitoring', 'Train end users and stakeholders', 'Establish feedback loops for continuous improvement']
    }
  ];

  const takeaways = [
    'Start with clear, measurable business objectives before selecting AI technologies',
    'Assess organizational readiness across technical capabilities, data maturity, and cultural factors',
    'Use focused pilots to demonstrate value and generate organizational learning',
    'Build cross-functional teams that combine technical expertise with domain knowledge',
    'Establish clear promotion criteria to avoid perpetual piloting'
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
                <Lightbulb className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="px-2 py-1 text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20">
                Learning Module
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 mb-4">
              AI Implementation Strategy
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-zinc-400">
              Practical frameworks for successfully deploying AI solutions in your organization.
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

          {/* Implementation Phases */}
          <FadeIn delay={0.25}>
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-8">Implementation Phases</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="p-5 bg-zinc-900/50 border border-zinc-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-zinc-800 border border-cyan-400/30 flex items-center justify-center text-sm font-mono text-cyan-400">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-white">{step.phase}</h4>
                    </div>
                    <ul className="space-y-2">
                      {step.activities.map((activity, aIndex) => (
                        <li key={aIndex} className="flex items-start gap-2 text-zinc-500 text-sm">
                          <span className="text-cyan-400 mt-0.5">→</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
            <Link href="/resources/knowledge/intro-ai-models" className="btn-secondary">
              <ArrowLeft className="w-4 h-4" />
              Previous: Intro to AI Models
            </Link>
            <Link href="/resources/knowledge/measuring-roi" className="btn-primary">
              Next: Measuring AI ROI
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
