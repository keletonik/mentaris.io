'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { timing, easing } from './motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const services = [
    { name: 'AI Tools', href: '/services/ai-tools', description: 'Custom AI applications' },
    { name: 'Custom Software', href: '/services/custom-software', description: 'Bespoke development' },
    { name: 'Machine Learning', href: '/services/machine-learning', description: 'ML model development' },
    { name: 'Data Analytics', href: '/services/data-analytics', description: 'Insights from data' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security solutions' },
    { name: 'Malware Analysis', href: '/services/malware-analysis', description: 'Threat intelligence' },
    { name: 'AI Consulting', href: '/services/ai-consulting', description: 'Strategy advisory' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#111113]/95 backdrop-blur-md border-b border-zinc-800/50' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-narrow">
          <div className="flex justify-between items-center h-20">
            <Link 
              href="/" 
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded"
              aria-label="Mentaris - Home"
            >
              <Image
                src="/logo-heading.png"
                alt="Mentaris"
                width={160}
                height={36}
                priority
                className="object-contain"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-link px-2 py-2"
                >
                  {link.name}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button 
                  className="nav-link px-2 py-2 flex items-center gap-1"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: shouldReduceMotion ? 0 : timing.fast }}
                      className="absolute top-full left-0 mt-2 w-72 bg-zinc-900 border border-zinc-800 shadow-xl shadow-black/20"
                      role="menu"
                    >
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-4 py-3 text-sm font-medium text-zinc-300 hover:text-cyan-400 hover:bg-zinc-800/50 border-b border-zinc-800 transition-colors"
                        role="menuitem"
                      >
                        All Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <div className="py-2 max-h-[60vh] overflow-y-auto">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2.5 hover:bg-zinc-800/50 transition-colors group"
                            role="menuitem"
                          >
                            <span className="block text-sm text-zinc-300 group-hover:text-cyan-400 transition-colors">{service.name}</span>
                            <span className="block text-xs text-zinc-600 mt-0.5">{service.description}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className="btn-primary ml-4"
              >
                Contact
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : timing.fast }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: shouldReduceMotion ? 0 : timing.normal, ease: easing.out }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-zinc-900 border-l border-zinc-800 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                <span className="font-semibold text-sm tracking-wide">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4">
                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <p className="px-4 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">Services</p>
                  <nav className="space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2.5 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800/50 rounded transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
