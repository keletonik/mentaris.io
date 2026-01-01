'use client';

import ServicePageTemplate from '@/components/service-page-template';
import { Brain, Lightbulb, Target, Users, FileText, TrendingUp, Cpu, Code, BarChart3 } from 'lucide-react';

export default function AIConsultingPage() {
  return (
    <ServicePageTemplate
      title="AI Consulting"
      subtitle="Strategy"
      description="Strategic AI advisory services to help you navigate the AI landscape. From technology assessment to implementation roadmaps, we guide your AI transformation journey."
      icon={Brain}
      features={[
        {
          title: 'AI Readiness Assessment',
          description: 'Evaluate your organization\'s data, infrastructure, and culture for AI adoption.',
          icon: Target,
        },
        {
          title: 'Use Case Identification',
          description: 'Discover high-impact AI opportunities aligned with your business objectives.',
          icon: Lightbulb,
        },
        {
          title: 'Technology Selection',
          description: 'Navigate the AI landscape to select the right tools, platforms, and vendors.',
          icon: Brain,
        },
        {
          title: 'Implementation Roadmap',
          description: 'Develop phased plans for AI adoption with clear milestones and success metrics.',
          icon: FileText,
        },
        {
          title: 'Team Development',
          description: 'Build internal AI capabilities through training, hiring guidance, and knowledge transfer.',
          icon: Users,
        },
        {
          title: 'ROI Modeling',
          description: 'Quantify the business impact of AI initiatives with realistic projections.',
          icon: TrendingUp,
        },
      ]}
      benefits={[
        'Avoid costly mistakes in AI technology selection',
        'Accelerate time-to-value on AI investments',
        'Build sustainable internal AI capabilities',
        'Align AI initiatives with business strategy',
        'Learn from experienced practitioners',
      ]}
      process={[
        {
          title: 'Discovery Workshop',
          description: 'Collaborative sessions to understand your business, challenges, and AI aspirations.',
        },
        {
          title: 'Current State Analysis',
          description: 'Assess existing data assets, technology infrastructure, and organizational readiness.',
        },
        {
          title: 'Opportunity Mapping',
          description: 'Identify and prioritize AI use cases based on impact, feasibility, and alignment.',
        },
        {
          title: 'Strategy Development',
          description: 'Create comprehensive AI strategy with technology recommendations and implementation plan.',
        },
        {
          title: 'Execution Support',
          description: 'Ongoing advisory during implementation, vendor selection, and team building.',
        },
      ]}
      relatedServices={[
        { title: 'Machine Learning', href: '/services/machine-learning', icon: Cpu },
        { title: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { title: 'AI Tools', href: '/services/ai-tools', icon: Code },
      ]}
    />
  );
}
