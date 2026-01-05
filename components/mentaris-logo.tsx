'use client';

interface MentarisLogoProps {
  className?: string;
  width?: number;
  dark?: boolean;
}

export function MentarisWordmark({ className = '', width = 200, dark = false }: MentarisLogoProps) {
  const textColor = dark ? '#18181b' : '#ffffff';
  const accentColor = dark ? '#0891b2' : '#22d3ee';
  
  return (
    <svg 
      viewBox="0 0 260 40" 
      className={className}
      style={{ width, height: 'auto' }}
      aria-label="Mentaris"
    >
      {/* M */}
      <path d="M0 32 L0 8 L12 22 L24 8 L24 32" stroke={textColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* E - three lines - CYAN */}
      <g stroke={accentColor} strokeWidth="3" strokeLinecap="round">
        <line x1="36" y1="8" x2="56" y2="8" />
        <line x1="36" y1="20" x2="52" y2="20" />
        <line x1="36" y1="32" x2="56" y2="32" />
      </g>
      {/* N */}
      <path d="M68 32 L68 8 L88 32 L88 8" stroke={textColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* T */}
      <g stroke={textColor} strokeWidth="3" strokeLinecap="round">
        <line x1="100" y1="8" x2="124" y2="8" />
        <line x1="112" y1="8" x2="112" y2="32" />
      </g>
      {/* A - pointy - CYAN */}
      <path d="M136 32 L148 8 L160 32" stroke={accentColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* R */}
      <path d="M172 32 L172 8 L188 8 Q196 8 196 16 Q196 22 188 22 L172 22 M188 22 L200 32" stroke={textColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* I */}
      <line x1="212" y1="8" x2="212" y2="32" stroke={textColor} strokeWidth="3" strokeLinecap="round" />
      {/* S */}
      <path d="M232 12 Q232 8 240 8 L248 8 Q256 8 256 14 Q256 20 244 20 Q224 20 224 28 Q224 32 236 32 L248 32 Q256 32 256 28" stroke={textColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MentarisStar({ size = 24, className = '', dark = false }: { size?: number; className?: string; dark?: boolean }) {
  const color = dark ? '#0891b2' : '#22d3ee';
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      className={`transition-transform duration-500 ease-out ${className}`}
    >
      <path 
        d="M24 2 C24 2 30 12 24 24 C12 18 2 24 2 24 C2 24 12 30 24 24 C18 36 24 46 24 46 C24 46 30 36 24 24 C36 30 46 24 46 24 C46 24 36 18 24 24 C30 12 24 2 24 2" 
        fill={color} 
      />
    </svg>
  );
}

export function MentarisLogoFull({ className = '', width = 260, dark = false }: MentarisLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <MentarisStar size={32} dark={dark} />
      <MentarisWordmark width={width} dark={dark} />
    </div>
  );
}
