"use client";
'use client';

import ServicePageTemplate from '@/components/service-page-template';
import { Wrench, Bot, Workflow, Zap, MessageSquare, Brain, BarChart3, Code, Shield } from 'lucide-react';

export default function AIToolsPage() {
  return (
    <ServicePageTemplate
      title="AI Tools"
      subtitle="Development"
      description="Custom AI applications tailored to your business processes. From intelligent chatbots to automated workflows, we build tools that enhance productivity and create competitive advantages."
      icon={Wrench}
      features={[
        {
          title: 'Intelligent Chatbots',
          description: 'Conversational AI that understands context, handles complex queries, and integrates with your systems.',
          icon: MessageSquare,
        },
        {
          title: 'Workflow Automation',
          description: 'Automate repetitive tasks with AI-powered decision making and smart routing.',
          icon: Workflow,
        },
        {
          title: 'Document Processing',
          description: 'Extract, classify, and process information from documents automatically.',
          icon: Bot,
        },
        {
          title: 'Predictive Analytics',
          description: 'Forecast trends, identify patterns, and make data-driven decisions.',
          icon: BarChart3,
        },
        {
          title: 'Custom LLM Integration',
          description: 'Leverage large language models with custom fine-tuning for your domain.',
          icon: Brain,
        },
        {
          title: 'Real-time Processing',
          description: 'Process and respond to data streams in real-time for immediate insights.',
          icon: Zap,
        },
      ]}
      benefits={[
        'Reduced operational costs through automation',
        'Faster response times and improved customer satisfaction',
        '24/7 availability without staffing constraints',
        'Scalable solutions that grow with your business',
        'Consistent quality and accuracy in repetitive tasks',
      ]}
      process={[
        {
          title: 'Discovery & Requirements',
          description: 'We analyze your workflows, identify automation opportunities, and define clear success metrics for your AI tool.',
        },
        {
          title: 'Design & Architecture',
          description: 'Create the technical blueprint including AI model selection, integration points, and user experience design.',
        },
        {
          title: 'Development & Training',
          description: 'Build the application, train AI models on your data, and integrate with existing systems.',
        },
        {
          title: 'Testing & Refinement',
          description: 'Rigorous testing with real scenarios, fine-tuning model performance, and user acceptance validation.',
        },
        {
          title: 'Deployment & Support',
          description: 'Launch to production with monitoring, ongoing optimization, and continuous improvement.',
        },
      ]}
      relatedServices={[
        { title: 'Machine Learning', href: '/services/machine-learning', icon: Brain },
        { title: 'Custom Software', href: '/services/custom-software', icon: Code },
        { title: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
      ]}
    />
  );
}
