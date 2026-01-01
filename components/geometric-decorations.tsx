'use client';

import { motion } from 'framer-motion';

interface GeometricDecorationsProps {
  variant?: 'hero' | 'section' | 'card';
  className?: string;
}

export function GeometricDecorations({ variant = 'section', className = '' }: GeometricDecorationsProps) {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Animated corner brackets */}
        <motion.div
          className="geometric-corner geometric-corner-tl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.div
          className="geometric-corner geometric-corner-tr"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.div
          className="geometric-corner geometric-corner-bl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
        <motion.div
          className="geometric-corner geometric-corner-br"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />

        {/* Horizontal lines */}
        <motion.div
          className="geometric-line-h w-1/3 top-1/4 left-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div
          className="geometric-line-h w-1/4 top-2/3 right-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Vertical lines */}
        <motion.div
          className="geometric-line-v h-1/2 left-1/4 top-0"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div
          className="geometric-line-v h-1/3 right-1/4 bottom-0"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-[var(--accent-green)] opacity-20"
          style={{ transform: 'rotate(45deg)' }}
          animate={{
            rotate: [45, 65, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-[var(--primary-blue)] opacity-20"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Subtle corner accents */}
        <div className="geometric-corner geometric-corner-tl" />
        <div className="geometric-corner geometric-corner-br" />
        
        {/* Diagonal line */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--accent-green)] to-transparent opacity-30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    );
  }

  // Card variant - minimal decorations
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent-green)]" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--primary-blue)]" />
    </div>
  );
}

export function GeometricGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff88" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function AngularDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`angular-divider ${className}`} />
  );
}
