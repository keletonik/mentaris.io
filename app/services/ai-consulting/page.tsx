import { Search, Cpu, Code2, Shield } from 'lucide-react';
import ServicePageTemplate from '@/components/service-page-template';

export default function AIConsultingPage() {
  return (
    <ServicePageTemplate
      title="AI Readiness Assessment"
      subtitle="Strategic Analysis"
      description="Before implementing anything, you need to know what's worth building. We analyse your operations and deliver a clear report: where AI will help, where it won't, and what you should prioritise."
      icon={Search}
      features={[
        { title: 'Operations Mapping', description: 'Document your current workflows and processes' },
        { title: 'Pain Point Analysis', description: 'Identify where time and money are being lost' },
        { title: 'Data Assessment', description: 'Evaluate your data readiness for AI' },
        { title: 'Opportunity Identification', description: 'Find high-impact areas for automation' },
        { title: 'Cost-Benefit Analysis', description: 'Realistic ROI projections' },
        { title: 'Implementation Roadmap', description: 'Prioritised plan with timelines' },
      ]}
      process={[
        { title: 'Kick-off', description: 'Define scope and objectives' },
        { title: 'Discovery', description: 'Talk to your team about their work' },
        { title: 'Observation', description: 'See how work actually gets done' },
        { title: 'Analysis', description: 'Evaluate opportunities and constraints' },
        { title: 'Delivery', description: 'Written recommendations with next steps' },
      ]}
      benefits={[
        'Clear picture of where AI can actually help',
        'Avoid wasting money on the wrong initiatives',
        'Realistic cost and timeline estimates',
        'Prioritised roadmap based on ROI',
        'Honest assessment — no overselling',
      ]}
      relatedServices={[
        { href: '/services/ai-tools', title: 'AI Tools Integration', icon: Cpu },
        { href: '/services/custom-software', title: 'Custom Development', icon: Code2 },
        { href: '/services/cybersecurity', title: 'Security & Compliance', icon: Shield },
      ]}
    />
  );
}
