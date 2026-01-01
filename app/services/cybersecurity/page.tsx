'use client';

import ServicePageTemplate from '@/components/service-page-template';
import { Shield, Lock, Eye, AlertTriangle, FileSearch, Users, Search, Code, Brain } from 'lucide-react';

export default function CybersecurityPage() {
  return (
    <ServicePageTemplate
      title="Cybersecurity"
      subtitle="Security"
      description="Comprehensive security solutions to protect your digital assets. From vulnerability assessments to incident response, we help you build a robust security posture against evolving threats."
      icon={Shield}
      features={[
        {
          title: 'Security Audits',
          description: 'Comprehensive assessment of your security posture identifying vulnerabilities and risks.',
          icon: FileSearch,
        },
        {
          title: 'Penetration Testing',
          description: 'Ethical hacking to discover and remediate security weaknesses before attackers do.',
          icon: Lock,
        },
        {
          title: 'Threat Detection',
          description: 'Real-time monitoring and AI-powered threat detection to identify suspicious activity.',
          icon: Eye,
        },
        {
          title: 'Incident Response',
          description: 'Rapid response protocols and forensic analysis when security incidents occur.',
          icon: AlertTriangle,
        },
        {
          title: 'Compliance Support',
          description: 'Ensure compliance with GDPR, HIPAA, SOC 2, and other regulatory requirements.',
          icon: Shield,
        },
        {
          title: 'Security Training',
          description: 'Transform your team into your first line of defense with security awareness training.',
          icon: Users,
        },
      ]}
      benefits={[
        'Reduced risk of data breaches and cyber attacks',
        'Protection of business reputation and customer trust',
        'Compliance with regulatory requirements',
        'Early detection and rapid response to threats',
        'Cost savings from prevented security incidents',
      ]}
      process={[
        {
          title: 'Security Assessment',
          description: 'Comprehensive evaluation of your current security infrastructure, policies, and practices.',
        },
        {
          title: 'Risk Analysis',
          description: 'Identify and prioritize security risks based on potential impact and likelihood.',
        },
        {
          title: 'Strategy Development',
          description: 'Create a tailored security strategy aligned with your business objectives and budget.',
        },
        {
          title: 'Implementation',
          description: 'Deploy security solutions including monitoring, access controls, and protection systems.',
        },
        {
          title: 'Ongoing Management',
          description: 'Continuous monitoring, threat intelligence updates, and security posture improvements.',
        },
      ]}
      relatedServices={[
        { title: 'Malware Analysis', href: '/services/malware-analysis', icon: Search },
        { title: 'Custom Software', href: '/services/custom-software', icon: Code },
        { title: 'AI Consulting', href: '/services/ai-consulting', icon: Brain },
      ]}
    />
  );
}
