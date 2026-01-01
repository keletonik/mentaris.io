'use client';

import ServicePageTemplate from '@/components/service-page-template';
import { BarChart3, LineChart, PieChart, Database, TrendingUp, Eye, Cpu, Code, Brain } from 'lucide-react';

export default function DataAnalyticsPage() {
  return (
    <ServicePageTemplate
      title="Data Analytics"
      subtitle="Data"
      description="Transform raw data into actionable insights that drive business decisions. We build analytics platforms, dashboards, and reporting systems that make complex data accessible and useful."
      icon={BarChart3}
      features={[
        {
          title: 'Business Intelligence',
          description: 'Interactive dashboards and reports that surface key metrics and trends.',
          icon: PieChart,
        },
        {
          title: 'Data Visualization',
          description: 'Clear, compelling visualizations that communicate insights effectively.',
          icon: LineChart,
        },
        {
          title: 'Data Warehousing',
          description: 'Centralized data repositories optimized for analytical queries and reporting.',
          icon: Database,
        },
        {
          title: 'Predictive Analytics',
          description: 'Forecast future trends and outcomes using statistical modeling and ML.',
          icon: TrendingUp,
        },
        {
          title: 'Real-time Analytics',
          description: 'Process streaming data for immediate insights and automated responses.',
          icon: Eye,
        },
        {
          title: 'Self-Service Analytics',
          description: 'Empower your team to explore data and create reports without IT dependency.',
          icon: BarChart3,
        },
      ]}
      benefits={[
        'Faster, more informed decision making',
        'Identify trends and opportunities early',
        'Reduce reporting time and manual effort',
        'Single source of truth for your organization',
        'Democratize data access across teams',
      ]}
      process={[
        {
          title: 'Data Assessment',
          description: 'Audit existing data sources, quality, and identify gaps in your analytics capabilities.',
        },
        {
          title: 'Requirements Gathering',
          description: 'Define key questions, metrics, and reporting needs across stakeholders.',
        },
        {
          title: 'Architecture Design',
          description: 'Design data pipelines, warehouse schema, and analytics platform architecture.',
        },
        {
          title: 'Implementation',
          description: 'Build ETL pipelines, configure analytics tools, and create dashboards.',
        },
        {
          title: 'Training & Adoption',
          description: 'Train users, establish governance practices, and drive organizational adoption.',
        },
      ]}
      relatedServices={[
        { title: 'Machine Learning', href: '/services/machine-learning', icon: Cpu },
        { title: 'Custom Software', href: '/services/custom-software', icon: Code },
        { title: 'AI Consulting', href: '/services/ai-consulting', icon: Brain },
      ]}
    />
  );
}
