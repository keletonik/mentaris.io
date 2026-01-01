'use client';

import ServicePageTemplate from '@/components/service-page-template';
import { Cpu, Brain, LineChart, Layers, Database, Zap, Wrench, BarChart3, Code } from 'lucide-react';

export default function MachineLearningPage() {
  return (
    <ServicePageTemplate
      title="Machine Learning"
      subtitle="AI/ML"
      description="End-to-end machine learning solutions from data preparation to model deployment. We build predictive models, deep learning systems, and AI infrastructure that deliver measurable business impact."
      icon={Cpu}
      features={[
        {
          title: 'Predictive Modeling',
          description: 'Build models that forecast outcomes, identify risks, and enable proactive decision making.',
          icon: LineChart,
        },
        {
          title: 'Deep Learning',
          description: 'Neural networks for complex pattern recognition, NLP, computer vision, and more.',
          icon: Brain,
        },
        {
          title: 'MLOps & Infrastructure',
          description: 'Production ML pipelines with automated training, monitoring, and model versioning.',
          icon: Layers,
        },
        {
          title: 'Data Engineering',
          description: 'Build robust data pipelines that prepare and transform data for ML workloads.',
          icon: Database,
        },
        {
          title: 'Model Optimization',
          description: 'Improve model performance, reduce inference time, and optimize for production deployment.',
          icon: Zap,
        },
        {
          title: 'Custom Algorithms',
          description: 'Develop proprietary algorithms tailored to your unique data and business problems.',
          icon: Cpu,
        },
      ]}
      benefits={[
        'Data-driven insights that humans might miss',
        'Automated decision making at scale',
        'Continuous improvement through model retraining',
        'Competitive advantage through AI capabilities',
        'Reduced manual analysis and faster insights',
      ]}
      process={[
        {
          title: 'Problem Definition',
          description: 'Clearly define the business problem, success metrics, and identify available data sources.',
        },
        {
          title: 'Data Exploration',
          description: 'Analyze data quality, identify patterns, and determine feature engineering requirements.',
        },
        {
          title: 'Model Development',
          description: 'Experiment with algorithms, train models, and optimize for your specific use case.',
        },
        {
          title: 'Validation & Testing',
          description: 'Rigorous evaluation against held-out data, bias testing, and performance benchmarking.',
        },
        {
          title: 'Deployment & Monitoring',
          description: 'Production deployment with monitoring, alerting, and automated retraining pipelines.',
        },
      ]}
      relatedServices={[
        { title: 'AI Tools', href: '/services/ai-tools', icon: Wrench },
        { title: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { title: 'Custom Software', href: '/services/custom-software', icon: Code },
      ]}
    />
  );
}
