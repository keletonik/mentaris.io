'use client';

import { motion } from 'framer-motion';
import { 
  Server, Shield, Brain, FileText, Calendar, Bell, 
  Users, Package, ClipboardCheck, Clock, Calculator,
  Scale, Building2, Landmark, Heart, Lock, ArrowRight,
  Database, Cpu, Network, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

function DataFlowDiagram() {
  return (
    <div className="relative h-64 md:h-80">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-36 md:w-44">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
          <Building2 className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
          <p className="text-sm font-medium text-white">Your Infrastructure</p>
          <p className="text-xs text-zinc-500 mt-1">On-premise or private cloud</p>
        </div>
      </div>
      
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-48"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 rounded-xl p-4 text-center">
          <Brain className="w-10 h-10 text-cyan-400 mx-auto mb-2" />
          <p className="text-sm font-medium text-white">Private AI Engine</p>
          <p className="text-xs text-cyan-400 mt-1">Trained on your data</p>
        </div>
      </motion.div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-36 md:w-44">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
          <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
          <p className="text-sm font-medium text-white">Your Team</p>
          <p className="text-xs text-zinc-500 mt-1">Instant AI assistance</p>
        </div>
      </div>
      
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.line
          x1="20%" y1="50%" x2="38%" y2="50%"
          stroke="rgba(34,211,238,0.3)" strokeWidth="2" strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.line
          x1="62%" y1="50%" x2="80%" y2="50%"
          stroke="rgba(34,211,238,0.3)" strokeWidth="2" strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
      
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
          <Shield className="w-4 h-4 text-green-400" />
          <span className="text-xs text-green-400 font-medium">Data never leaves your control</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function PrivateAIPage() {
  const capabilities = [
    { icon: Database, title: 'Custom Knowledge Base', description: 'AI trained on your documents, policies, procedures, and institutional knowledge' },
    { icon: Server, title: 'Private Deployment', description: 'Runs on your infrastructure — on-premise servers or your own cloud tenancy' },
    { icon: Network, title: 'System Integration', description: 'Connects to your existing tools — files, calendar, email, practice management' },
    { icon: Shield, title: 'Complete Data Privacy', description: 'Your sensitive information never touches external servers or third-party APIs' },
    { icon: Cpu, title: 'Optimised Model Selection', description: 'We assess your needs and deploy the right model for your specific use case' },
    { icon: Brain, title: 'Continuous Learning', description: 'System improves over time as it learns from your workflows and feedback' },
  ];

  const fireSafetyFeatures = [
    { icon: FileText, title: 'Document Control', description: 'Centralised repository with automatic version control' },
    { icon: Bell, title: 'AFSS Tracking', description: 'Monitor compliance deadlines, flag renewals months ahead' },
    { icon: Calendar, title: 'Automated Reminders', description: 'Professional client notifications without manual follow-up' },
    { icon: Users, title: 'Technician Scheduling', description: 'Optimise visits by location, certification, availability' },
    { icon: Package, title: 'Inventory Management', description: 'Track stock, predict reorder points from upcoming jobs' },
    { icon: ClipboardCheck, title: 'Service Report Assistance', description: 'Analyse findings, identify defects, suggest works required' },
    { icon: Clock, title: 'Time Estimation', description: 'Predict job duration based on historical data' },
    { icon: Calculator, title: 'Quote Generation', description: 'Accurate estimates from materials and labour predictions' },
  ];

  const industries = [
    { icon: Scale, title: 'Legal', description: 'Client confidentiality and privilege protection' },
    { icon: Heart, title: 'Healthcare', description: 'Patient data and HIPAA/privacy compliance' },
    { icon: Landmark, title: 'Financial Services', description: 'Regulatory requirements and data sovereignty' },
    { icon: Building2, title: 'Government', description: 'Security clearances and data classification' },
    { icon: Shield, title: 'Fire & Safety', description: 'Compliance documentation and operational efficiency' },
    { icon: Lock, title: 'Any Sensitive Industry', description: 'Where data privacy is non-negotiable' },
  ];

  const processSteps = [
    { step: '01', title: 'Assessment', description: 'Analyse your workflows and identify where AI adds real value' },
    { step: '02', title: 'Architecture', description: 'Design the system — model selection, data sources, integrations' },
    { step: '03', title: 'Knowledge Base', description: 'Index your documents and train on your domain expertise' },
    { step: '04', title: 'Deployment', description: 'Install on your infrastructure with proper security controls' },
    { step: '05', title: 'Refinement', description: 'Tune responses based on usage, expand capabilities over time' },
  ];

  return (
    <main className="min-h-screen bg-[#111113] text-white">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34,211,238,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Lock className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Enterprise AI Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Private AI{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Assistants
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
            >
              Your data is too sensitive for cloud AI. We build private AI assistants that run on your infrastructure, trained on your documents, integrated with your workflows. Your data never leaves your control.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-lg transition-colors">
                Discuss Your Requirements <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services/ai-consulting" className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Start with Assessment
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Problem with Cloud AI</h2>
            <div className="space-y-4">
              {['ChatGPT and Claude are powerful, but your client files can\'t go to external servers',
                'Generic AI doesn\'t know your business, your procedures, or your industry terminology',
                'Compliance requirements make cloud AI a non-starter for sensitive work',
                'You need AI that works for you, not AI you have to work around'
              ].map((point, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                  <p className="text-zinc-300">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How Private AI Works</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Your AI assistant lives on your infrastructure, trained on your data, accessible only to your team.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <DataFlowDiagram />
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Build</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Complete AI systems designed for your specific needs and security requirements.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
                <cap.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-zinc-400 text-sm">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50 bg-gradient-to-b from-orange-500/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-orange-400 font-medium">Case Study</p>
                <h2 className="text-2xl md:text-3xl font-bold">Fire Safety & Compliance Operations</h2>
              </div>
            </div>
            <p className="text-zinc-400 mb-8 max-w-3xl">A fire protection company drowning in AFSS paperwork — missed renewal dates, scattered documentation, technicians double-booked, hours spent on service reports. We built an internal AI system that:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {fireSafetyFeatures.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4 hover:border-orange-500/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-orange-400 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-zinc-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <p className="text-zinc-300 italic">"Compliance deadlines stopped slipping, admin hours dropped dramatically, and the team could take on more clients without adding headcount."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50 bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Scale className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-blue-400 font-medium">Case Study</p>
                <h2 className="text-2xl md:text-3xl font-bold">Legal & Professional Services</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-zinc-400 mb-6">A NSW family law firm needed associates to quickly reference case history, precedents, and internal procedures — but couldn't risk client data on cloud AI platforms.</p>
                <p className="text-zinc-400 mb-6">We deployed a private AI assistant trained on their document management system. The system understands NSW Family Law, their internal procedures, and their specific case formats.</p>
                <div className="space-y-3">
                  {['Instant answers on case-specific questions', 'Procedural guidance from firm knowledge base', 'Research assistance without external data exposure', 'Sensitive client information never leaves their servers'].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                      <span className="text-zinc-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-zinc-500 ml-2">AI Assistant</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-zinc-500"><span className="text-blue-400">Associate:</span> What's our standard approach for property settlement where there's a business involved?</div>
                  <div className="text-zinc-300 bg-zinc-800/50 rounded p-3"><span className="text-cyan-400">AI:</span> Based on the firm's procedures (ref: Property-Settlement-Guide-v3.2), business valuations require... [detailed procedural response from firm knowledge base]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Who This Is For</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Industries where data privacy isn't optional — it's mandatory.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <industry.icon className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{industry.title}</h3>
                  <p className="text-sm text-zinc-500">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">From assessment to deployment, we handle the complexity so you get a working system.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent hidden md:block" />
              <div className="space-y-8">
                {processSteps.map((step, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0 relative z-10">
                      <span className="text-cyan-400 font-bold text-sm">{step.step}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                      <p className="text-zinc-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What You Get</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {['AI that actually knows your business', 'Complete data privacy — nothing leaves your systems', 'Reduced time on repetitive research and admin', 'Staff augmentation without the headcount', 'Competitive advantage through proprietary AI', 'Ongoing support and capability expansion'].map((benefit, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-zinc-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for AI That Respects Your Data?</h2>
            <p className="text-zinc-400 mb-8">Let's discuss how a private AI assistant could transform your operations while keeping your sensitive data exactly where it belongs — under your control.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-lg transition-colors">
              Start the Conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
