'use client';

import { ArrowLeft, CheckCircle, Brain, Book, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

export default function IntroAIModels() {
  const lessons = [
    {
      number: 1,
      title: 'What is an AI Model?',
      duration: '8 min',
      content: [
        'An AI model is a mathematical representation that learns patterns from data. Think of it as a sophisticated pattern recognition system that improves through experience.',
        'Unlike traditional software that follows explicit rules, AI models discover their own rules by analyzing examples. This fundamental difference enables them to handle complex, nuanced tasks that would be impossible to program manually.',
        'The term "model" comes from statistics—these systems build mathematical models of relationships in data. Once trained, they can apply those learned relationships to make predictions about new, unseen data.'
      ]
    },
    {
      number: 2,
      title: 'Neural Networks Explained',
      duration: '12 min',
      content: [
        'Neural networks form the backbone of modern AI. They consist of layers of interconnected nodes ("neurons") that process information in stages, with each layer extracting progressively more abstract features.',
        'The architecture mimics aspects of biological neural systems, though the comparison shouldn\'t be taken too literally. These are mathematical structures, not biological brains.',
        'Deep learning refers to neural networks with many layers. The "depth" allows these networks to learn hierarchical representations—simple concepts in early layers combine to form complex concepts in later layers.'
      ]
    },
    {
      number: 3,
      title: 'Training and Learning',
      duration: '10 min',
      content: [
        'Training an AI model involves showing it many examples and letting it adjust its internal parameters to minimize prediction errors. This process happens through an algorithm called backpropagation.',
        'The quality of training data directly determines model performance. More data generally helps, but data quality matters more than quantity. Biased, incomplete, or inaccurate training data produces flawed models.',
        'Training large models requires substantial computational resources. Companies often use specialized hardware (GPUs or TPUs) to train models efficiently. Training times can range from hours to weeks depending on model size and data volume.'
      ]
    },
    {
      number: 4,
      title: 'Common Model Types',
      duration: '15 min',
      content: [
        'Supervised learning models learn from labeled examples. You provide input-output pairs, and the model learns to map inputs to outputs. Common applications include image classification, fraud detection, and demand forecasting.',
        'Unsupervised learning models find patterns in unlabeled data. They excel at clustering similar items, detecting anomalies, and reducing data complexity. Use cases include customer segmentation and anomaly detection.',
        'Reinforcement learning models learn through trial and error, receiving rewards for good actions. They\'re used in robotics, game playing, and optimization problems where the model must learn strategies through interaction.'
      ]
    },
    {
      number: 5,
      title: 'Practical Considerations',
      duration: '11 min',
      content: [
        'Model selection depends on your problem type, available data, and deployment constraints. There\'s no universal "best" model—different architectures excel at different tasks.',
        'Overfitting occurs when models memorize training data rather than learning generalizable patterns. Techniques like regularization, dropout, and validation datasets help prevent this common problem.',
        'Model deployment requires more than technical accuracy. Consider inference speed, computational requirements, integration complexity, and monitoring needs. A highly accurate model that runs too slowly may be less valuable than a slightly less accurate but faster alternative.'
      ]
    }
  ];

  const takeaways = [
    'AI models are pattern recognition systems that learn from data rather than following explicit programming',
    'Neural networks process information in layers, enabling them to learn complex, hierarchical representations',
    'Training quality depends heavily on data quality—biased or incomplete data produces flawed models',
    'Different model types (supervised, unsupervised, reinforcement learning) suit different business problems',
    'Successful deployment requires considering accuracy, speed, resource requirements, and integration complexity'
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
                <Brain className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="px-2 py-1 text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20">
                Learning Module
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 mb-4">
              Introduction to AI Models
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-zinc-400">
              Learn the fundamentals of artificial intelligence models, from neural networks to transformer architectures.
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
            <Link
              href="/resources"
              className="btn-secondary"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>
            <Link
              href="/resources/knowledge/ai-implementation"
              className="btn-primary"
            >
              Next: AI Implementation Strategy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
