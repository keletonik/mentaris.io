import { Search, Cpu, Code2, Shield } from 'lucide-react';
import ServicePageTemplate from '@/components/service-page-template';

// ai readiness assessment - the starting point for most engagements
// operations analysis, opportunity identification, roadmap

export default function AIConsultingPage() {
  return (
    <ServicePageTemplate
      title="AI Readiness Assessment"
      subtitle="Strategic Analysis"
      description="Before implementing anything, you need to know what's worth building. We analyse your operations and deliver a clear report: where AI will help, where it won't, and what you should prioritise."
      icon={Search}
      longDescription={
        <>
          <p>
            Most AI projects fail because they start with technology instead of problems. 
            Someone reads about ChatGPT, decides the company needs AI, and launches a project 
            without understanding whether it will actually help.
          </p>
          <p>
            Our assessment starts with your operations, not with AI capabilities. We spend time 
            with your team understanding workflows, bottlenecks, and where time actually goes. 
            We look at your data, your systems, and your constraints.
          </p>
          <p>
            Then — and only then — we evaluate what AI can realistically do for you. Not every 
            problem needs AI. Sometimes the answer is a spreadsheet formula. Sometimes it's a 
            simple automation that doesn't involve machine learning at all.
          </p>
          <p>
            You get a written report with specific recommendations, realistic cost estimates, 
            and honest timelines. If we don't think AI will help, we'll tell you. We'd rather 
            save you money than sell you services you don't need.
          </p>
        </>
      }
      features={[
        {
          title: 'Operations Mapping',
          description: 'Detailed documentation of current workflows, touchpoints, and time allocation.',
        },
        {
          title: 'Pain Point Analysis',
          description: 'Identification of bottlenecks, inefficiencies, and high-effort/low-value tasks.',
        },
        {
          title: 'Data Assessment',
          description: 'Evaluation of data quality, availability, and readiness for AI applications.',
        },
        {
          title: 'Opportunity Identification',
          description: 'Specific recommendations for where AI can deliver measurable value.',
        },
        {
          title: 'Cost-Benefit Analysis',
          description: 'Realistic estimates of implementation costs versus expected returns.',
        },
        {
          title: 'Implementation Roadmap',
          description: 'Prioritised sequence of initiatives with timelines and dependencies.',
        },
      ]}
      processSteps={[
        {
          title: 'Kick-off & Scoping',
          description: 'Initial meeting to define scope, identify stakeholders, and schedule interviews.',
        },
        {
          title: 'Discovery Interviews',
          description: 'One-on-one sessions with team members across different roles. We ask about day-to-day work, pain points, and wish lists.',
        },
        {
          title: 'Process Observation',
          description: 'We watch people work. Often the biggest opportunities are in tasks people don\'t even think to mention.',
        },
        {
          title: 'Data & Systems Review',
          description: 'Technical assessment of your current tools, data sources, and integration possibilities.',
        },
        {
          title: 'Analysis & Recommendations',
          description: 'We synthesise findings into actionable recommendations with prioritisation.',
        },
        {
          title: 'Report Delivery',
          description: 'Written report and presentation. We walk through findings and answer questions.',
        },
      ]}
      benefits={[
        'Clear picture of where AI can actually help',
        'Avoid wasting money on the wrong initiatives',
        'Realistic cost and timeline estimates',
        'Prioritised roadmap based on ROI',
        'Honest assessment — no overselling',
        'Foundation for informed decision-making',
      ]}
      relatedServices={[
        {
          slug: 'ai-tools',
          title: 'AI Tools Integration',
          description: 'Ready to implement? We can help with that too.',
          icon: Cpu,
        },
        {
          slug: 'custom-software',
          title: 'Custom Development',
          description: 'For requirements that need bespoke solutions.',
          icon: Code2,
        },
        {
          slug: 'cybersecurity',
          title: 'Security & Compliance',
          description: 'For regulated industries with strict requirements.',
          icon: Shield,
        },
      ]}
    />
  );
}
