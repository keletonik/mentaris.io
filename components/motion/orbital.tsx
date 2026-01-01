'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/* ========================================
   ORBITAL SYSTEM
   
   A signature motion element for Mentaris.
   Represents data flow, connectivity, and
   the precise, engineered nature of AI systems.
   ======================================== */

interface OrbitalProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  speed?: 'slow' | 'normal' | 'fast';
}

export function OrbitalRings({ 
  className = '',
  size = 'md',
  speed = 'normal',
}: OrbitalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const sizeMap = {
    sm: { outer: 120, middle: 80, inner: 40 },
    md: { outer: 200, middle: 140, inner: 80 },
    lg: { outer: 320, middle: 220, inner: 120 },
  };
  
  const speedMap = {
    slow: { outer: 30, middle: 20, inner: 12 },
    normal: { outer: 20, middle: 14, inner: 8 },
    fast: { outer: 12, middle: 8, inner: 5 },
  };
  
  const dimensions = sizeMap[size];
  const durations = speedMap[speed];
  
  if (!mounted) return null;
  
  return (
    <div className={`relative ${className}`} style={{ width: dimensions.outer, height: dimensions.outer }}>
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-zinc-800"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{
          duration: durations.outer,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-zinc-600" />
      </motion.div>
      
      {/* Middle ring */}
      <motion.div
        className="absolute rounded-full border border-zinc-700/50"
        style={{
          top: (dimensions.outer - dimensions.middle) / 2,
          left: (dimensions.outer - dimensions.middle) / 2,
          width: dimensions.middle,
          height: dimensions.middle,
        }}
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{
          duration: durations.middle,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400/50" />
      </motion.div>
      
      {/* Inner ring */}
      <motion.div
        className="absolute rounded-full border border-zinc-600/30"
        style={{
          top: (dimensions.outer - dimensions.inner) / 2,
          left: (dimensions.outer - dimensions.inner) / 2,
          width: dimensions.inner,
          height: dimensions.inner,
        }}
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{
          duration: durations.inner,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
      </motion.div>
      
      {/* Center dot */}
      <div 
        className="absolute rounded-full bg-cyan-400"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 6,
          height: 6,
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
        }}
      />
    </div>
  );
}

// Data flow visualization - horizontal lines with moving dots
export function DataFlow({ className = '' }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  const lines = [0, 1, 2, 3, 4];
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {lines.map((i) => (
        <div key={i} className="relative h-px bg-zinc-800 my-4">
          {!shouldReduceMotion && (
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-8 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.6), transparent)',
              }}
              animate={{
                x: ['-10%', '110%'],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.8,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Node connection visualization
export function NodeCluster({ className = '' }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  const nodes = [
    { x: 50, y: 30, size: 6, delay: 0 },
    { x: 80, y: 60, size: 4, delay: 0.5 },
    { x: 30, y: 70, size: 5, delay: 1 },
    { x: 70, y: 85, size: 3, delay: 1.5 },
    { x: 20, y: 40, size: 4, delay: 2 },
  ];
  
  return (
    <div className={`relative ${className}`} style={{ width: 100, height: 100 }}>
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <line x1="50" y1="30" x2="80" y2="60" stroke="#3f3f46" strokeWidth="0.5" />
        <line x1="50" y1="30" x2="30" y2="70" stroke="#3f3f46" strokeWidth="0.5" />
        <line x1="80" y1="60" x2="70" y2="85" stroke="#3f3f46" strokeWidth="0.5" />
        <line x1="30" y1="70" x2="20" y2="40" stroke="#3f3f46" strokeWidth="0.5" />
        <line x1="20" y1="40" x2="50" y2="30" stroke="#3f3f46" strokeWidth="0.5" />
      </svg>
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-zinc-600"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            transform: 'translate(-50%, -50%)',
          }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: node.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
