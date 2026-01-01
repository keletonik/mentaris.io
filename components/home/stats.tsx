'use client';

import { FadeIn, StaggerChildren, StaggerItem, PrecisionNumber, RevealLine } from '../motion';
import { Users, FolderGit2, Clock, Award } from 'lucide-react';

export default function Stats() {
  const stats = [
    { 
      icon: FolderGit2,
      value: 50, 
      suffix: '+', 
      label: 'Projects Delivered',
      description: 'Successful implementations'
    },
    { 
      icon: Users,
      value: 30, 
      suffix: '+', 
      label: 'Enterprise Clients',
      description: 'Across industries'
    },
    { 
      icon: Clock,
      value: 5, 
      suffix: '+', 
      label: 'Years Experience',
      description: 'In AI & Software'
    },
    { 
      icon: Award,
      value: 99, 
      suffix: '%', 
      label: 'Client Satisfaction',
      description: 'On delivered projects'
    },
  ];

  return (
    <section className="relative bg-[#0a0a0b] py-20">
      {/* Top accent line */}
      <RevealLine color="accent" />
      
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <StaggerChildren className="contents">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <div className="relative group">
                  {/* Index number */}
                  <span className="absolute -top-2 -left-2 font-mono text-[10px] text-zinc-700">
                    0{index + 1}
                  </span>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-zinc-900 border border-zinc-800 group-hover:border-cyan-400/30 transition-colors">
                      <stat.icon className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-0.5 mb-1">
                        <span className="text-3xl font-semibold text-white tracking-tight">
                          <PrecisionNumber value={stat.value} />
                        </span>
                        <span className="text-xl font-semibold text-cyan-400">{stat.suffix}</span>
                      </div>
                      <p className="text-sm font-medium text-zinc-300 mb-0.5">{stat.label}</p>
                      <p className="text-xs text-zinc-600">{stat.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="mt-20">
        <RevealLine color="accent" />
      </div>
    </section>
  );
}
