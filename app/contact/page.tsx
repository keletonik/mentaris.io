'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, ArrowRight, Clock, MessageSquare } from 'lucide-react';
import { FadeIn, RevealLine } from '@/components/motion';
import { OrbitalRings } from '@/components/motion/orbital';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Operational AI Integration',
    'Custom AI Development',
    'AI Readiness Assessment',
    'Security & Compliance',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <main className="bg-[#111113] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
        
        <div className="container-narrow relative">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-4 bg-cyan-400" />
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Contact</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Let&apos;s start a <span className="text-gradient-cyan">conversation</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.15}>
              <p className="text-lg text-zinc-400">
                Have a project in mind? We&apos;d love to hear from you. Tell us about your challenges and we&apos;ll explore how we can help.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <RevealLine />

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <FadeIn>
                {status === 'success' ? (
                  <div className="instrument-card p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">Message Sent</h3>
                    <p className="text-zinc-500 mb-8 max-w-sm mx-auto">
                      Thanks for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="input-label">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="input-field"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="input-label">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="input-field"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="input-label">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="input-field"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="input-label">Service Interest</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="input-field"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="input-label">Message *</label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="input-field resize-none"
                        placeholder="Tell us about your project, challenges, and goals..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-sm text-red-400">{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-zinc-600 text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </FadeIn>
            </div>

            {/* Sidebar - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info Card */}
              <FadeIn delay={0.1}>
                <div className="precision-panel p-6">
                  <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-6">Contact Details</h3>
                  
                  <div className="space-y-6">
                    <a 
                      href="mailto:admin@mentaris.io"
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-2.5 bg-zinc-800/50 border border-zinc-700 group-hover:border-cyan-400/30 transition-colors">
                        <Mail className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider mb-1">Email</p>
                        <p className="text-zinc-300 group-hover:text-cyan-400 transition-colors">admin@mentaris.io</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-zinc-800/50 border border-zinc-700">
                        <MapPin className="w-4 h-4 text-zinc-500" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider mb-1">Location</p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          Sydney, NSW<br />
                          Australia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Response Time Card */}
              <FadeIn delay={0.15}>
                <div className="precision-panel p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Response Time</span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    We typically respond within <span className="text-zinc-200 font-medium">24 hours</span> during business days.
                  </p>
                </div>
              </FadeIn>

              {/* FAQ Callout */}
              <FadeIn delay={0.2}>
                <div className="precision-panel p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Quick Answers</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">
                    Check our FAQ for answers to common questions.
                  </p>
                  <a href="/faq" className="btn-ghost text-sm p-0">
                    View FAQ
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </FadeIn>

              {/* Visual Element */}
              <FadeIn delay={0.25} className="hidden lg:block">
                <div className="flex justify-center pt-4">
                  <OrbitalRings size="sm" speed="slow" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
