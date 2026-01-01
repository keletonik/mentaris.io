'use client';

import ServicePageTemplate from '@/components/service-page-template';
import { Code, Layers, Server, Globe, Smartphone, Database, Wrench, Brain, Shield } from 'lucide-react';

export default function CustomSoftwarePage() {
  return (
    <ServicePageTemplate
      title="Custom Software"
      subtitle="Development"
      description="Bespoke software solutions built for scale, performance, and reliability. We design and develop applications that solve your unique business challenges and create lasting competitive advantages."
      icon={Code}
      features={[
        {
          title: 'Web Applications',
          description: 'Modern, responsive web apps built with cutting-edge frameworks and cloud-native architectures.',
          icon: Globe,
        },
        {
          title: 'Mobile Development',
          description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
          icon: Smartphone,
        },
        {
          title: 'Enterprise Systems',
          description: 'Scalable enterprise solutions that integrate with existing infrastructure and workflows.',
          icon: Server,
        },
        {
          title: 'API Development',
          description: 'RESTful and GraphQL APIs that enable system integration and third-party connectivity.',
          icon: Layers,
        },
        {
          title: 'Database Design',
          description: 'Optimized database architectures for performance, scalability, and data integrity.',
          icon: Database,
        },
        {
          title: 'Legacy Modernization',
          description: 'Transform outdated systems into modern, maintainable applications without business disruption.',
          icon: Wrench,
        },
      ]}
      benefits={[
        'Solutions tailored exactly to your business needs',
        'Full ownership and control of your software',
        'Scalable architecture that grows with you',
        'Integration with existing tools and workflows',
        'Long-term cost savings over generic solutions',
      ]}
      process={[
        {
          title: 'Requirements Analysis',
          description: 'Deep dive into your business processes, user needs, and technical requirements to define the project scope.',
        },
        {
          title: 'Architecture & Design',
          description: 'Create system architecture, database design, and UI/UX prototypes for validation before development.',
        },
        {
          title: 'Agile Development',
          description: 'Iterative development with regular demos and feedback loops. You see progress every sprint.',
        },
        {
          title: 'Quality Assurance',
          description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing.',
        },
        {
          title: 'Deployment & Handover',
          description: 'Production deployment, documentation, training, and ongoing support arrangements.',
        },
      ]}
      relatedServices={[
        { title: 'AI Tools', href: '/services/ai-tools', icon: Wrench },
        { title: 'Data Analytics', href: '/services/data-analytics', icon: Database },
        { title: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      ]}
    />
  );
}
