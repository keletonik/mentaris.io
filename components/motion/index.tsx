'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

/* ========================================
   MENTARIS MOTION SYSTEM
   
   Design Philosophy: "Mechanical Intelligence"
   - Precise, engineered movements
   - Physics-lite constraints (no bouncy/playful)
   - Purposeful - motion communicates function
   - Respectful of reduced-motion preferences
   ======================================== */

// === TIMING PRESETS ===
export const timing = {
  instant: 0.1,
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  slower: 0.6,
};

// === EASING PRESETS ===
export const easing = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
  mechanical: [0.4, 0, 0.2, 1],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
};

// === FADE VARIANTS ===
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: timing.normal, ease: easing.out }
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: timing.normal, ease: easing.out }
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: timing.normal, ease: easing.out }
  },
};

// === STAGGER CONTAINER ===
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: timing.normal, ease: easing.out },
  },
};

// === REVEAL LINE (for horizontal reveals) ===
export const revealLine: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: timing.slow, ease: easing.inOut },
  },
};

// === SLIDE VARIANTS ===
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: timing.normal, ease: easing.out },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: timing.normal, ease: easing.out },
  },
};

// === HOVER EFFECTS ===
export const hoverLift = {
  y: -4,
  transition: { duration: timing.fast, ease: easing.out },
};

export const hoverGlow = {
  boxShadow: '0 0 24px rgba(34, 211, 238, 0.3)',
  transition: { duration: timing.fast },
};

// === COMPONENT: FadeIn ===
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  once = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  
  const getVariants = (): Variants => {
    if (shouldReduceMotion) return fadeIn;
    
    switch (direction) {
      case 'up': return fadeInUp;
      case 'down': return fadeInDown;
      case 'left': return slideInLeft;
      case 'right': return slideInRight;
      default: return fadeIn;
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={getVariants()}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// === COMPONENT: StaggerChildren ===
interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
}

export function StaggerChildren({ 
  children, 
  className = '',
  once = true,
}: StaggerChildrenProps) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={shouldReduceMotion ? fadeIn : staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// === COMPONENT: StaggerItem ===
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// === COMPONENT: RevealLine ===
interface RevealLineProps {
  className?: string;
  color?: 'accent' | 'subtle';
}

export function RevealLine({ className = '', color = 'subtle' }: RevealLineProps) {
  const shouldReduceMotion = useReducedMotion();
  const bgColor = color === 'accent' 
    ? 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent'
    : 'bg-gradient-to-r from-transparent via-zinc-600 to-transparent';
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={shouldReduceMotion ? fadeIn : revealLine}
      className={`h-px ${bgColor} ${className}`}
    />
  );
}

// === COMPONENT: PrecisionNumber (animated counter) ===
interface PrecisionNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function PrecisionNumber({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 1.5,
  className = '',
}: PrecisionNumberProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || hasAnimated) {
      setDisplayValue(value);
      return;
    }
  }, [value, shouldReduceMotion, hasAnimated]);

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (!hasAnimated && !shouldReduceMotion) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            // Ease out quad
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.floor(easedProgress * value));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };
          requestAnimationFrame(animate);
        }
      }}
      className={className}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
}

// === COMPONENT: ScanLine (decorative animated line) ===
export function ScanLine({ className = '' }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) return null;
  
  return (
    <motion.div
      className={`absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent ${className}`}
      animate={{
        top: ['0%', '100%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

// === COMPONENT: PulseRing (for status indicators) ===
export function PulseRing({ className = '' }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <span className={`relative inline-flex ${className}`}>
      <span className="w-2 h-2 rounded-full bg-emerald-500" />
      {!shouldReduceMotion && (
        <span className="absolute inline-flex w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
      )}
    </span>
  );
}

// === COMPONENT: GlowBorder (hover glow effect wrapper) ===
interface GlowBorderProps {
  children: ReactNode;
  className?: string;
}

export function GlowBorder({ children, className = '' }: GlowBorderProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        boxShadow: '0 0 30px rgba(34, 211, 238, 0.15)',
      }}
      transition={{ duration: timing.fast }}
    >
      {children}
    </motion.div>
  );
}

// === COMPONENT: ShiftOnHover ===
interface ShiftOnHoverProps {
  children: ReactNode;
  className?: string;
  shift?: number;
}

export function ShiftOnHover({ 
  children, 
  className = '',
  shift = -4,
}: ShiftOnHoverProps) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      className={className}
      whileHover={shouldReduceMotion ? {} : { y: shift }}
      transition={{ duration: timing.fast, ease: easing.out }}
    >
      {children}
    </motion.div>
  );
}
