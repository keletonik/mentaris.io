'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TerminalAnimation from './terminal-animation';

function OrbitalBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Outer ring */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full border border-zinc-800/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400" />
      </motion.div>
      
      {/* Middle ring */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full border border-zinc-800/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400" />
        <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
      </motion.div>
      
      {/* Inner ring */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full border border-zinc-800/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-400" />
      </motion.div>
      
      {/* Center dot */}
      <div className="absolute w-1 h-1 rounded-full bg-cyan-400/40" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#111113]">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34,211,238,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111113]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-full mb-6">
                <span className="text-xs font-mono text-zinc-400 tracking-wide">
                  AI IMPLEMENTATION · SYDNEY, AUSTRALIA
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              AI implementation for businesses that can't afford to fall behind
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-400 mb-8 max-w-lg"
            >
              Most AI consultants dazzle with demos and leave nothing usable. 
              We analyse operations, identify real opportunities, and implement 
              systems that actually work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn-primary">
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Right: Terminal with orbital behind */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Orbital background */}
            <OrbitalBackground />
            
            {/* Terminal on top */}
            <div className="relative z-10">
              <TerminalAnimation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
