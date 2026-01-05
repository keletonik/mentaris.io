'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const terminalLines = [
  { type: 'command', text: '$ mentaris init --private-ai', delay: 0 },
  { type: 'output', text: '→ Connecting to secure infrastructure...', delay: 800 },
  { type: 'success', text: '✓ Private environment ready', delay: 1600 },
  { type: 'command', text: '$ mentaris analyze ./documents/', delay: 2400 },
  { type: 'output', text: '→ Processing 847 compliance documents...', delay: 3200 },
  { type: 'output', text: '→ Extracting requirements from AS 1851...', delay: 4000 },
  { type: 'output', text: '→ Cross-referencing NCC 2024 amendments...', delay: 4800 },
  { type: 'success', text: '✓ Analysis complete: 23 action items identified', delay: 5600 },
  { type: 'command', text: '$ mentaris deploy --model compliance-v3', delay: 6800 },
  { type: 'output', text: '→ Loading fine-tuned model weights...', delay: 7600 },
  { type: 'output', text: '→ Optimizing for your hardware...', delay: 8400 },
  { type: 'success', text: '✓ AI assistant deployed locally', delay: 9200 },
  { type: 'command', text: '$ mentaris ask "What fire safety checks are due?"', delay: 10400 },
  { type: 'response', text: 'Based on your AFSS schedule, 3 properties require', delay: 11200 },
  { type: 'response', text: 'quarterly sprinkler inspections by Jan 15.', delay: 11600 },
  { type: 'response', text: 'I\'ve drafted the service requests.', delay: 12000 },
  { type: 'success', text: '✓ Ready for review in dashboard', delay: 12800 },
];

export default function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    terminalLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
        if (line.type === 'command') {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 600);
        }
      }, line.delay);
      timers.push(timer);
    });

    // Loop the animation
    const resetTimer = setTimeout(() => {
      setVisibleLines(0);
    }, 15000);
    timers.push(resetTimer);

    return () => timers.forEach(t => clearTimeout(t));
  }, [visibleLines === 0]);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'command': return 'text-cyan-400';
      case 'success': return 'text-green-400';
      case 'response': return 'text-amber-300';
      default: return 'text-zinc-400';
    }
  };

  return (
    <div className="relative w-full max-w-xl">
      {/* Terminal window */}
      <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs text-zinc-500 font-mono">mentaris-cli</span>
        </div>
        
        {/* Terminal content */}
        <div className="p-4 font-mono text-sm h-80 overflow-hidden">
          <div className="space-y-1.5">
            {terminalLines.slice(0, visibleLines).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${getLineColor(line.type)} ${line.type === 'response' ? 'pl-4 border-l-2 border-amber-500/30' : ''}`}
              >
                {line.text}
              </motion.div>
            ))}
            
            {/* Blinking cursor */}
            {visibleLines < terminalLines.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-cyan-400 ml-1"
              />
            )}
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute -inset-px bg-gradient-to-b from-cyan-500/10 to-transparent rounded-lg -z-10 blur-xl" />
    </div>
  );
}
