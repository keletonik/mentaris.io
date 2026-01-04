import { Shield, Cpu, Code2, Search } from 'lucide-react';
import ServicePageTemplate from '@/components/service-page-template';

export default function CybersecurityPage() {
  return (
    <ServicePageTemplate
      title="Security & Compliance"
      subtitle="Regulated Industries"
      description="AI implementation in regulated industries requires careful attention to data security, privacy, and compliance. We build systems with security baked in from day one."
      icon={Shield}
      features={[
        { title: 'Compliance Assessment', description: 'Gap analysis against relevant regulations and standards' },
        { title: 'Security Architecture', description: 'Design that addresses data protection and access control' },
        { title: 'Access Controls', description: 'Role-based permissions for sensitive functions' },
        { title: 'Audit Trail Implementation', description: 'Comprehensive logging for compliance demonstration' },
        { title: 'Policy Development', description: 'Documentation for AI governance and acceptable use' },
        { title: 'Compliance Documentation', description: 'Records structured for regulatory review' },
      ]}
      process={[
        { title: 'Regulatory Review', description: 'Identify applicable regulations and standards' },
        { title: 'Risk Assessment', description: 'Evaluate risks including data privacy and model errors' },
        { title: 'Controls Design', description: 'Technical and procedural controls to mitigate risks' },
        { title: 'Implementation', description: 'Build and deploy security measures' },
        { title: 'Documentation', description: 'Comprehensive docs and staff training' },
      ]}
      benefits={[
        'Meet regulatory requirements from day one',
        'Audit-ready documentation and logging',
        'Reduced risk of data breaches',
        'Clear policies for AI governance',
        'Confidence for stakeholders and clients',
      ]}
      relatedServices={[
        { href: '/services/ai-consulting', title: 'AI Readiness Assessment', icon: Search },
        { href: '/services/ai-tools', title: 'AI Tools Integration', icon: Cpu },
        { href: '/services/custom-software', title: 'Custom Development', icon: Code2 },
      ]}
    />
  );
}
