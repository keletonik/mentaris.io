import { Shield, Cpu, Code2, Search } from 'lucide-react';
import ServicePageTemplate from '@/components/service-page-template';

// security & compliance - ai implementation for regulated industries
// proper controls, audit trails, documentation

export default function CybersecurityPage() {
  return (
    <ServicePageTemplate
      title="Security & Compliance"
      subtitle="Regulated Industries"
      description="AI implementation in regulated industries requires careful attention to data security, privacy, and compliance. We build systems with security baked in from day one."
      icon={Shield}
      longDescription={
        <>
          <p>
            Implementing AI in compliance-heavy industries isn't just about getting the technology 
            to work. It's about getting it to work while maintaining proper controls, audit trails, 
            and documentation that satisfies regulators.
          </p>
          <p>
            We've worked in regulated environments. We understand that "it works" isn't enough — 
            you need to prove it works correctly, that data is protected, that access is controlled, 
            and that you can demonstrate all of this to auditors.
          </p>
          <p>
            Our approach builds compliance in from the start, not as an afterthought. Data 
            classification, access controls, encryption, logging, retention policies — all 
            addressed during design, not patched on later.
          </p>
          <p>
            We also help with the human side: policies, procedures, training, and documentation 
            that ensure your team knows how to use AI tools appropriately and can demonstrate 
            compliance when asked.
          </p>
        </>
      }
      features={[
        {
          title: 'Compliance Assessment',
          description: 'Gap analysis against relevant regulations (privacy laws, industry standards, internal policies).',
        },
        {
          title: 'Security Architecture',
          description: 'Design that addresses data protection, access control, and threat mitigation.',
        },
        {
          title: 'Access Controls',
          description: 'Role-based permissions ensuring only authorised personnel access sensitive functions.',
        },
        {
          title: 'Audit Trail Implementation',
          description: 'Comprehensive logging of actions for compliance demonstration and incident investigation.',
        },
        {
          title: 'Policy & Procedure Development',
          description: 'Documentation for AI governance, acceptable use, and incident response.',
        },
        {
          title: 'Compliance Documentation',
          description: 'Records and reports structured for regulatory review and audit support.',
        },
      ]}
      processSteps={[
        {
          title: 'Regulatory Landscape Review',
          description: 'Identify all applicable regulations, standards, and internal policies that apply to your AI implementation.',
        },
        {
          title: 'Risk Assessment',
          description: 'Systematic evaluation of risks associated with AI use, including data privacy, model errors, and misuse scenarios.',
        },
        {
          title: 'Controls Design',
          description: 'Technical and procedural controls designed to mitigate identified risks and meet compliance requirements.',
        },
        {
          title: 'Implementation',
          description: 'Build and deploy security measures integrated with the AI solution itself.',
        },
        {
          title: 'Documentation & Training',
          description: 'Comprehensive documentation and staff training on policies and procedures.',
        },
        {
          title: 'Ongoing Monitoring',
          description: 'Regular review of controls, updates for regulatory changes, and periodic assessments.',
        },
      ]}
      benefits={[
        'Meet regulatory requirements from day one',
        'Audit-ready documentation and logging',
        'Reduced risk of data breaches',
        'Clear policies for AI governance',
        'Staff trained on compliant use',
        'Confidence for stakeholders and clients',
      ]}
      relatedServices={[
        {
          slug: 'ai-consulting',
          title: 'AI Readiness Assessment',
          description: 'Start with a clear picture of your needs.',
          icon: Search,
        },
        {
          slug: 'ai-tools',
          title: 'AI Tools Integration',
          description: 'Implementation of existing tools with proper controls.',
          icon: Cpu,
        },
        {
          slug: 'custom-software',
          title: 'Custom Development',
          description: 'Bespoke solutions built with security in mind.',
          icon: Code2,
        },
      ]}
    />
  );
}
