'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Flame, FileCheck, Brain, Shield, BarChart3, 
  Smartphone, Monitor, FileText, AlertTriangle,
  CheckCircle2, ArrowRight, Mail, Database,
  TrendingUp, DollarSign, Building2, Users,
  Layers, Search, Clock, Zap,
  BookOpen, Scale, ClipboardCheck, PieChart
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

function AIProcessingVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto h-80">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-6 rounded-full bg-orange-500/20 blur-xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/20 border-2 border-orange-500/50 flex items-center justify-center">
            <Brain className="w-12 h-12 text-orange-400" />
          </div>
        </div>
      </motion.div>
      
      <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4">
        {[
          { icon: BookOpen, label: 'Standards', delay: 0 },
          { icon: FileText, label: 'Documents', delay: 0.2 },
          { icon: Database, label: 'History', delay: 0.4 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: item.delay }}
            className="flex items-center gap-2"
          >
            <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-zinc-400" />
            </div>
            <span className="text-xs text-zinc-500">{item.label}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4">
        {[
          { icon: CheckCircle2, label: 'Verified', color: 'text-green-400', bg: 'bg-green-500/20 border-green-500/30', delay: 0.6 },
          { icon: AlertTriangle, label: 'Flagged', color: 'text-yellow-400', bg: 'bg-yellow-500/20 border-yellow-500/30', delay: 0.8 },
          { icon: FileCheck, label: 'Reports', color: 'text-cyan-400', bg: 'bg-cyan-500/20 border-cyan-500/30', delay: 1 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: item.delay }}
            className="flex items-center gap-2"
          >
            <span className="text-xs text-zinc-500">{item.label}</span>
            <div className={`w-12 h-12 rounded-lg ${item.bg} border flex items-center justify-center`}>
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ icon: Icon, title, subtitle, description, features, color, badge }: {
  icon: any; title: string; subtitle: string; description: string; features: string[]; color: 'orange' | 'cyan'; badge?: string;
}) {
  const colors = {
    orange: { bg: 'from-orange-500/20 to-red-500/10', border: 'border-orange-500/30', icon: 'text-orange-400', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    cyan: { bg: 'from-cyan-500/20 to-blue-500/10', border: 'border-cyan-500/30', icon: 'text-cyan-400', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' }
  }[color];
  
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className={`relative bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl p-8 h-full`}>
      {badge && <div className={`absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-medium border ${colors.badgeBg}`}>{badge}</div>}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-zinc-900/50 border border-zinc-700 flex items-center justify-center">
          <Icon className={`w-7 h-7 ${colors.icon}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-zinc-500">{subtitle}</p>
        </div>
      </div>
      <p className="text-zinc-400 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 ${colors.icon} shrink-0 mt-0.5`} />
            <span className="text-sm text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function FyreOneAIPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Beta signup:', email);
    setSubmitted(true);
  };

  const desktopFeatures = [
    { icon: FileCheck, title: 'Document Control', description: 'Centralised repository with automatic version control. Never lose track of which certificate, report, or assessment is current.' },
    { icon: Search, title: 'Automated Analysis', description: 'AI reads assessor reports, extracts compliance issues, identifies defects, and flags discrepancies automatically.' },
    { icon: Scale, title: 'Standards Verification', description: 'Cross-references FSS and AFSS against building classification. Flags when installation standards don\'t match building type.' },
    { icon: ClipboardCheck, title: 'Audit Report Generation', description: 'Compiles all property data into comprehensive audit reports. One click from raw documents to client-ready deliverable.' },
    { icon: TrendingUp, title: 'Predictive Analytics', description: 'Identifies which fire measures fail most, common defect types by location, and forecasts maintenance costs.' },
    { icon: DollarSign, title: 'Cost Allocation', description: 'Separates costs by lot for strata. Automatic breakdown for tenant/owner on-charging. No more manual invoice splitting.' },
  ];

  const aiCapabilities = [
    { title: 'Domain-Trained Intelligence', description: 'Not a generic chatbot. FyreOne\'s model is trained specifically on Australian fire safety — AS 1851, AS 2118, NCC, state amendments, and thousands of real compliance documents.' },
    { title: 'Multi-Source Verification', description: 'Every response cross-references multiple authoritative sources. The AI cites its sources and flags when information conflicts or requires clarification.' },
    { title: 'Continuous Learning', description: 'When standards update, so does FyreOne. The model is retrained on regulatory changes so you\'re never working with outdated information.' },
    { title: 'Document Understanding', description: 'Upload service reports, defect registers, or assessor documents. The AI extracts structured data — defects, recommendations, compliance gaps — ready for analysis.' },
  ];

  return (
    <main className="min-h-screen bg-[#111113] text-white">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249,115,22,0.08) 1px, transparent 0)`, backgroundSize: '50px 50px' }} />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">Early Access Program</span>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center justify-center gap-3 mb-6">
              <Flame className="w-12 h-12 text-orange-500" />
              <h1 className="text-4xl md:text-6xl font-bold">Fyre<span className="text-orange-500">One</span> AI</h1>
            </motion.div>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 mb-4 max-w-2xl mx-auto">
              AI-powered fire safety compliance platform. Built by professionals who've spent years in the industry and understand what compliance teams actually need.
            </motion.p>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-zinc-500 mb-8">
              Mobile assistant for on-site support. Desktop suite for comprehensive auditing.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Built From Industry Experience</h2>
              <div className="prose prose-invert prose-zinc">
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  After years working in fire safety compliance, we know the pain points. Auditors drowning in paperwork. Property managers chasing missing certificates. Compliance teams manually cross-referencing standards against building classifications. Critical information buried in PDF service reports that no one has time to read properly.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  We also know what matters: accurate baseline data, multi-layer verification so nothing gets missed, and audit trails that satisfy regulators. Generic AI tools don't understand fire safety. They can't tell you whether an AS 1851 inspection frequency applies to your building classification.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed">FyreOne AI does. Because we built it specifically for this industry.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The FyreOne Platform</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Two products designed to work together. Quick answers on-site, comprehensive auditing at your desk.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard
              icon={Smartphone}
              title="FyreOne AI Assistant"
              subtitle="Mobile Application"
              description="Your fire safety expert in your pocket. Get instant answers to compliance questions, reference standards, and verify requirements — right from the field."
              features={['Instant answers on AS 1851, NCC, state regulations', 'On-site support for technicians and certifiers', 'Photo analysis for defect identification', 'Offline access to key reference material', 'Voice input for hands-free operation']}
              color="orange"
              badge="Beta"
            />
            <ProductCard
              icon={Monitor}
              title="FyreOne Compliance Manager"
              subtitle="Desktop Application"
              description="Complete compliance auditing suite for fire safety professionals. Document control, automated analysis, and audit report generation — all powered by AI."
              features={['Document control with version management', 'Automated defect extraction from service reports', 'Standards verification against building classification', 'One-click audit report generation', 'Predictive maintenance analytics', 'Strata cost allocation and invoice splitting']}
              color="cyan"
              badge="In Development"
            />
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">How the AI Works</h2>
                <p className="text-zinc-400 mb-6">
                  FyreOne's AI engine uses a <strong className="text-white">Retrieval-Augmented Generation (RAG)</strong> architecture — combining large language model capabilities with a curated knowledge base of Australian fire safety standards, building codes, and regulatory requirements.
                </p>
                <div className="space-y-4">
                  {aiCapabilities.map((cap, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-1">{cap.title}</h4>
                      <p className="text-sm text-zinc-500">{cap.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div><AIProcessingVisual /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Compliance Manager Features</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Everything you need to manage fire safety compliance across a portfolio.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {desktopFeatures.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
                <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50 bg-gradient-to-b from-cyan-500/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Predictive Intelligence</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Stop being reactive. FyreOne analyses your historical data to predict what's coming.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: BarChart3, title: 'Defect Pattern Analysis', description: 'Identifies which fire measures fail most frequently, common defect types by building age and classification, and seasonal patterns in compliance issues.' },
                { icon: Building2, title: 'Location Intelligence', description: 'For strata properties, tracks which lots have the most defects raised. Helps committees identify problem areas and target interventions.' },
                { icon: DollarSign, title: 'Budget Forecasting', description: 'Predicts maintenance costs based on asset age, historical failure rates, and upcoming compliance requirements. No more budget surprises.' },
                { icon: PieChart, title: 'Cost Breakdown', description: 'Automatic separation of costs by lot for strata. Generates detailed breakdowns for tenant/owner on-charging without manual invoice splitting.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                  <item.icon className="w-8 h-8 text-cyan-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Who FyreOne Is For</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Users, title: 'Fire Safety Compliance Teams', desc: 'Streamline auditing, reduce paperwork, ensure nothing gets missed' },
                { icon: Building2, title: 'Strata Managers', desc: 'Track compliance across multiple properties, allocate costs accurately' },
                { icon: Shield, title: 'Building Certifiers', desc: 'Verify standards quickly, generate compliant documentation' },
                { icon: ClipboardCheck, title: 'Fire Protection Companies', desc: 'Efficient service reporting, defect tracking, client communication' },
                { icon: Layers, title: 'Property Managers', desc: 'Stay on top of AFSS deadlines, forecast maintenance costs' },
                { icon: Scale, title: 'Compliance Consultants', desc: 'Deliver better audits faster, add value with predictive insights' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <item.icon className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-400 font-medium">Join the Beta</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Early Access to FyreOne AI</h2>
              <p className="text-zinc-400 mb-8">Be among the first to use the mobile assistant. Get 3 free queries to test it out, then join our beta program for full access.</p>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required
                    className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500" />
                  <button type="submit" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
                    Get Access <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-3 text-green-400">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-medium">You're on the list! We'll be in touch soon.</span>
                </div>
              )}
              <p className="text-xs text-zinc-600 mt-4">Mobile beta launching Q1 2025. Desktop application to follow.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-zinc-500 text-sm">
              FyreOne AI is built by{' '}<Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Mentaris</Link>{' '}— AI implementation for compliance-heavy industries.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
