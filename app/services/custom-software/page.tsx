"use client";
import { Code2, Cpu, Shield, Search } from 'lucide-react';
import ServicePageTemplate from '@/components/service-page-template';

export default function CustomSoftwarePage() {
  return (
    <ServicePageTemplate
      title="Custom AI Development"
      subtitle="Bespoke Solutions"
      description="When off-the-shelf tools won't cut it, we build custom AI solutions tailored to your specific workflows, data, and requirements."
      icon={Code2}
      features={[
        { title: 'Custom Model Training', description: 'AI models trained on your specific data and use cases' },
        { title: 'System Integration', description: 'Seamless connection with your existing software stack' },
        { title: 'API Development', description: 'Clean interfaces for your applications to consume AI capabilities' },
        { title: 'Workflow Automation', description: 'End-to-end process automation with intelligent decision making' },
        { title: 'Data Pipeline Design', description: 'Robust data flows that keep your AI systems fed and current' },
        { title: 'Performance Optimisation', description: 'Fast, efficient systems that scale with your needs' },
      ]}
      process={[
        { title: 'Requirements', description: 'Deep dive into your specific needs and constraints' },
        { title: 'Architecture', description: 'Design the technical solution and integration points' },
        { title: 'Development', description: 'Build, test, and iterate on the solution' },
        { title: 'Deployment', description: 'Launch with monitoring and support' },
        { title: 'Optimisation', description: 'Continuous improvement based on real-world performance' },
      ]}
      benefits={[
        'Solution built exactly for your needs',
        'Competitive advantage through unique capabilities',
        'Full ownership of the solution',
        'Integration with existing systems',
        'Scalable architecture for growth',
      ]}
      relatedServices={[
        { href: '/services/ai-consulting', title: 'AI Readiness Assessment', icon: Search },
        { href: '/services/ai-tools', title: 'AI Tools Integration', icon: Cpu },
        { href: '/services/cybersecurity', title: 'Security & Compliance', icon: Shield },
      ]}
    />
  );
}
