'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does Mentaris offer?',
      answer: 'We specialize in AI solutions, custom software development, cybersecurity services, malware analysis, machine learning implementation, and data analytics. Our team works with businesses of all sizes to deliver tailored technology solutions.',
    },
    {
      question: 'How does the engagement process work?',
      answer: 'We start with a discovery call to understand your needs, followed by a proposal outlining scope, timeline, and pricing. Once approved, we work in agile sprints with regular check-ins and deliverables.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We work across multiple industries including finance, healthcare, retail, manufacturing, and technology. Our solutions are adaptable to meet the specific requirements of each sector.',
    },
    {
      question: 'How do you ensure data security?',
      answer: 'Security is embedded in everything we build. We follow industry best practices including encryption, access controls, regular security audits, and compliance with relevant regulations.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and retainer arrangements. The best model depends on your project scope and requirements.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer ongoing maintenance and support packages for all our solutions. This includes bug fixes, updates, monitoring, and technical support.',
    },
    {
      question: 'Where is Mentaris located?',
      answer: 'We are based in Sydney, Australia, but work with clients globally. We can accommodate different time zones for meetings and communication.',
    },
  ];

  return (
    <main className="bg-[#111113] min-h-screen">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
        
        <div className="container-narrow relative max-w-3xl mx-auto">
          <FadeIn>
            <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">FAQ</span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6">
              Frequently Asked <span className="text-gradient-cyan">Questions</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <p className="text-lg text-zinc-400 mb-16">
              Find answers to common questions about our services.
            </p>
          </FadeIn>

          <StaggerChildren>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <div className="border border-zinc-800 hover:border-zinc-700 transition-colors bg-zinc-900/30">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex justify-between items-center p-5 text-left"
                    >
                      <span className="font-medium pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-500 transition-transform flex-shrink-0 ${
                          openIndex === index ? 'rotate-180 text-cyan-400' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-zinc-400 border-t border-zinc-800 pt-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>

          <FadeIn delay={0.5}>
            <div className="mt-16 text-center">
              <p className="text-zinc-500 mb-4">Still have questions?</p>
              <Link href="/contact" className="btn-primary">
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
