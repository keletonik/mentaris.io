'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Flame, Radio, Droplets, Gauge, Server, Bell, 
  Shield, Activity, AlertTriangle, CheckCircle2,
  Building2, Cpu, Wifi, Database, ArrowRight,
  TrendingUp, Clock, DollarSign, BarChart3,
  Mail, Zap, ThermometerSun, Wind, Lock, Eye
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

function BuildingSystemsSchematic() {
  const [activeAlerts, setActiveAlerts] = useState<number[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const alertId = Math.floor(Math.random() * 6);
        setActiveAlerts(prev => [...prev, alertId]);
        setTimeout(() => {
          setActiveAlerts(prev => prev.filter(id => id !== alertId));
        }, 2000);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const systemNodes = [
    { id: 0, icon: Flame, label: 'Fire Panel', angle: 0, color: 'text-red-400' },
    { id: 1, icon: Radio, label: 'Smoke Detectors', angle: 60, color: 'text-orange-400' },
    { id: 2, icon: Droplets, label: 'Sprinkler System', angle: 120, color: 'text-blue-400' },
    { id: 3, icon: Gauge, label: 'Fire Pumps', angle: 180, color: 'text-cyan-400' },
    { id: 4, icon: ThermometerSun, label: 'BMS / HVAC', angle: 240, color: 'text-green-400' },
    { id: 5, icon: Lock, label: 'Access Control', angle: 300, color: 'text-purple-400' },
  ];

  const radius = 140;

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />
      
      <svg className="absolute inset-0 w-full h-full">
        <circle cx="50%" cy="50%" r={radius} fill="none" stroke="rgba(34,211,238,0.1)" strokeWidth="2" strokeDasharray="8 8" />
        <circle cx="50%" cy="50%" r={radius * 0.6} fill="none" stroke="rgba(34,211,238,0.05)" strokeWidth="1" />
      </svg>
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-6 rounded-full bg-cyan-500/20 blur-xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/30 to-cyan-500/10 border-2 border-cyan-500/50 flex items-center justify-center">
            <div className="text-center">
              <Cpu className="w-10 h-10 text-cyan-400 mx-auto mb-1" />
              <span className="text-xs font-bold text-cyan-400">AI ENGINE</span>
            </div>
          </div>
          <motion.div
            className="absolute -inset-2 rounded-full border border-cyan-500/30"
            animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      {systemNodes.map((node, i) => {
        const angleRad = (node.angle - 90) * (Math.PI / 180);
        const x = 50 + (radius / 2.8) * Math.cos(angleRad);
        const y = 50 + (radius / 2.8) * Math.sin(angleRad);
        const isActive = activeAlerts.includes(node.id);
        
        return (
          <motion.div
            key={i}
            className="absolute z-10"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <motion.div
              className={`relative w-16 h-16 rounded-xl bg-zinc-800/80 border ${isActive ? 'border-red-500' : 'border-zinc-700'} flex flex-col items-center justify-center transition-colors`}
              whileHover={{ scale: 1.1 }}
              animate={isActive ? { scale: [1, 1.1, 1] } : {}}
            >
              {isActive && (
                <motion.div
                  className="absolute -inset-1 rounded-xl border-2 border-red-500"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
              <node.icon className={`w-6 h-6 ${isActive ? 'text-red-400' : node.color}`} />
              <span className="text-[9px] text-zinc-400 mt-1 text-center leading-tight">{node.label}</span>
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${isActive ? 'bg-red-500' : 'bg-green-500'}`} />
            </motion.div>
          </motion.div>
        );
      })}
      
      {activeAlerts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-red-500/50 rounded-lg px-4 py-2 flex items-center gap-2"
        >
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span className="text-sm text-red-400">AI Analysing Anomaly...</span>
        </motion.div>
      )}
    </div>
  );
}

function DashboardPreview() {
  const [metrics, setMetrics] = useState({ activeAssets: 2847, healthScore: 94, predictions: 12, prevented: 847 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeAssets: prev.activeAssets + Math.floor(Math.random() * 3),
        healthScore: 94 + Math.floor(Math.random() * 3),
        predictions: 12 + Math.floor(Math.random() * 2),
        prevented: prev.prevented + Math.floor(Math.random() * 2),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const metricItems = [
    { label: 'Active Assets', value: metrics.activeAssets.toLocaleString(), icon: Activity, color: 'text-cyan-400' },
    { label: 'System Health', value: `${metrics.healthScore}%`, icon: CheckCircle2, color: 'text-green-400' },
    { label: 'Active Predictions', value: metrics.predictions, icon: TrendingUp, color: 'text-yellow-400' },
    { label: 'Failures Prevented', value: metrics.prevented.toLocaleString(), icon: Shield, color: 'text-purple-400' },
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-zinc-500 font-mono">MENTARIS // INTELLIGENT FIRE SYSTEMS</span>
        <div className="flex items-center gap-2">
          <motion.div className="w-2 h-2 rounded-full bg-green-500" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
          <span className="text-xs text-green-400">LIVE</span>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-px bg-zinc-800">
        {metricItems.map((metric, i) => (
          <div key={i} className="bg-zinc-900 p-4">
            <div className="flex items-center gap-2 mb-2">
              <metric.icon className={`w-4 h-4 ${metric.color}`} />
              <span className="text-xs text-zinc-500">{metric.label}</span>
            </div>
            <span className="text-2xl font-bold text-white">{metric.value}</span>
          </div>
        ))}
      </div>
      
      <div className="p-4 space-y-2 max-h-48 overflow-hidden">
        {[
          { time: '2 min ago', event: 'Pump #3 bearing wear detected - maintenance scheduled', type: 'warning' },
          { time: '15 min ago', event: 'Building A smoke detector sensitivity adjusted via BMS', type: 'info' },
          { time: '1 hour ago', event: 'False alarm prevented - HVAC dust cycle identified', type: 'success' },
          { time: '3 hours ago', event: 'AFSS renewal reminder sent to client: Westfield Tower', type: 'info' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 text-sm">
            <span className="text-zinc-600 text-xs w-16 shrink-0">{item.time}</span>
            <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.type === 'warning' ? 'bg-yellow-500' : item.type === 'success' ? 'bg-green-500' : 'bg-cyan-500'}`} />
            <span className="text-zinc-400">{item.event}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function IntelligentFireSystemsPage() {
  const capabilities = [
    { icon: TrendingUp, title: 'Predictive Maintenance', description: 'AI monitors pump performance, panel diagnostics, and sensor readings. Detects anomalies before failure — bearing wear, battery degradation, sensor drift.' },
    { icon: Bell, title: 'False Alarm Reduction', description: 'AI learns building patterns — HVAC cycles, cooking times, dust accumulation. Distinguishes real threats from environmental triggers.' },
    { icon: Shield, title: 'Compliance Automation', description: 'BMS data feeds directly into compliance reporting. Real-time fire system status monitoring for AFSS requirements.' },
    { icon: Wifi, title: 'Smart Building Integration', description: 'Fire panel communicates with access control, HVAC, lighting. AI coordinates emergency response — unlock doors, pressurize stairwells.' },
    { icon: Database, title: 'Asset Lifecycle Intelligence', description: 'Track every fire asset from install to replacement. AI predicts end-of-life based on actual usage, not calendar age.' },
    { icon: BarChart3, title: 'Portfolio Analytics', description: 'Single dashboard across multiple sites. Identify underperforming assets, compare building performance.' },
  ];

  const integrations = [
    { icon: Flame, label: 'Fire Panels', desc: 'All major brands' },
    { icon: Radio, label: 'Detection Systems', desc: 'Smoke, heat, gas' },
    { icon: Droplets, label: 'Suppression', desc: 'Sprinklers, deluge, gas' },
    { icon: Gauge, label: 'Fire Pumps', desc: 'Performance monitoring' },
    { icon: ThermometerSun, label: 'BMS / HVAC', desc: 'Environmental control' },
    { icon: Lock, label: 'Access Control', desc: 'Emergency egress' },
    { icon: Eye, label: 'CCTV', desc: 'Visual verification' },
    { icon: Wifi, label: 'IoT Sensors', desc: 'Extended monitoring' },
  ];

  const benefits = [
    { icon: DollarSign, title: 'Reduce Costs', value: '40%', desc: 'reduction in emergency callouts' },
    { icon: Clock, title: 'Save Time', value: '60%', desc: 'less admin on compliance reporting' },
    { icon: Shield, title: 'Prevent Failures', value: '85%', desc: 'of equipment failures predicted' },
    { icon: TrendingUp, title: 'Extend Life', value: '25%', desc: 'longer asset lifespan' },
  ];

  return (
    <main className="min-h-screen bg-[#111113] text-white">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34,211,238,0.08) 1px, transparent 0)`, backgroundSize: '50px 50px' }} />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">Coming Soon</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold mb-6">
              Intelligent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-cyan-400">Fire Systems</span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
              AI-powered monitoring and predictive maintenance for fire safety infrastructure. Connect your fire panels, BMS, and building systems into a single intelligent platform.
            </motion.p>
          </div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="mb-16">
            <BuildingSystemsSchematic />
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-semibold px-8 py-4 rounded-lg transition-all">
              Register Interest <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services/private-ai" className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Learn About Our AI Services
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Real-Time Intelligence Dashboard</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Monitor your entire fire safety infrastructure from a single pane of glass.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <DashboardPreview />
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What It Does</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Transform reactive maintenance into proactive management.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
                <cap.icon className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-zinc-400 text-sm">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">System Integrations</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Connects with your existing infrastructure. No rip-and-replace required.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {integrations.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center hover:border-cyan-500/30 transition-colors">
                <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">{item.label}</h4>
                <p className="text-xs text-zinc-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Expected Outcomes</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Based on industry benchmarks and pilot implementations.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">{benefit.value}</div>
                <div className="text-sm text-zinc-400">{benefit.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Who This Is For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Property Portfolios', desc: 'REITs, fund managers, strata with multiple buildings to manage' },
                { title: 'Complex Environments', desc: 'Hospitals, universities, airports, shopping centres' },
                { title: 'Fire Protection Companies', desc: 'Add managed services revenue to maintenance contracts' },
                { title: 'Building Owners', desc: 'Tired of reactive maintenance and compliance headaches' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Mail className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">Early Access Program</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be First to Transform Your Fire Safety Operations</h2>
            <p className="text-zinc-400 mb-8">We're working with select partners to pilot Intelligent Fire Systems. Register your interest to join the early access program.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-semibold px-8 py-4 rounded-lg transition-all">
              Register Interest <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-zinc-600 mt-4">Currently in development. Expected pilot Q2 2026.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
