'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Message {
  type: 'user' | 'ai' | 'system';
  text: string;
}

// Smarter response matching with multiple keywords per response
const responsePatterns: Array<{ keywords: string[]; response: string }> = [
  // Greetings
  { keywords: ['hello', 'hi', 'hey', 'g\'day', 'gday', 'howdy'], response: "Hey! I'm the Mentaris AI assistant. Ask me about our services, private AI, or fire compliance solutions." },
  
  // What do you do / build
  { keywords: ['what do you do', 'what do you build', 'what does mentaris do', 'what you do', 'what you build', 'you guys build', 'you guys do', 'your business'], response: "We build and deploy AI systems for businesses. Private AI on your infrastructure, custom software, compliance automation. We focus on industries where data privacy matters — legal, healthcare, fire safety, finance." },
  
  // Services overview
  { keywords: ['services', 'offer', 'provide', 'help with'], response: "Our core services: Private AI (runs on your servers), Custom Software Development, AI Consulting, and Cybersecurity. We specialise in compliance-heavy industries." },
  
  // Private AI
  { keywords: ['private ai', 'private', 'on-premise', 'on premise', 'local ai', 'self-hosted', 'data stay', 'data privacy', 'keep data'], response: "Private AI means your AI runs on YOUR infrastructure. Your data never leaves your servers — nothing goes to OpenAI or Google. Perfect for legal, healthcare, finance, and compliance-heavy industries." },
  
  // Location
  { keywords: ['where', 'location', 'located', 'based', 'office', 'sydney', 'australia'], response: "We're based in Sydney, Australia. We work with clients globally though — most projects are remote-friendly." },
  
  // Pricing / Cost
  { keywords: ['price', 'pricing', 'cost', 'how much', 'expensive', 'rates', 'quote', 'budget'], response: "Every project is scoped individually. Private AI deployments typically start from $15k for SMBs. Book a free 30-min call and we'll give you a realistic estimate — no pressure." },
  
  // Fire / FyreOne
  { keywords: ['fire', 'fyreone', 'fyre', 'as 1851', 'as1851', 'ncc', 'compliance', 'safety', 'afss', 'essential services'], response: "FyreOne AI is our fire safety compliance platform — trained on AS 1851, NCC, and Australian standards. Mobile app for on-site questions, desktop suite for document control and audits. Currently in beta." },
  
  // How it works / Technical
  { keywords: ['how does it work', 'how do you', 'technical', 'tech stack', 'what models', 'llm', 'llama', 'mistral', 'gpt'], response: "We deploy open-source models (Llama, Mistral, Qwen) on your infrastructure, fine-tune them on your documents, and integrate with your systems. You own everything — no vendor lock-in." },
  
  // Integration
  { keywords: ['integrate', 'integration', 'connect', 'api', 'existing system', 'crm', 'erp'], response: "We integrate with your existing tools — document management, CRMs, ERPs. API-first approach means your AI works where your team already works." },
  
  // Security
  { keywords: ['security', 'secure', 'safe', 'cybersecurity', 'hack', 'protect'], response: "Security is core to what we do. Private deployment means no external API calls. Full audit trails, encryption at rest and in transit. We also offer dedicated cybersecurity services." },
  
  // Contact
  { keywords: ['contact', 'email', 'call', 'talk', 'meeting', 'book', 'reach'], response: "Email us at admin@mentaris.io or book a free 30-min assessment at mentaris.io/contact. We'll get back within 24 hours." },
  
  // Who / Team / About
  { keywords: ['who are you', 'about', 'team', 'founder', 'company', 'mentaris'], response: "Mentaris is an AI implementation consultancy based in Sydney. Founded by someone who spent years in fire safety compliance and got tired of manual processes. We build AI that actually works." },
  
  // Capabilities / Can you
  { keywords: ['can you', 'able to', 'capability', 'what can', 'do you support'], response: "I can answer questions about Mentaris services, private AI deployment, fire compliance (FyreOne), pricing, and how we work. Try asking about something specific!" },
  
  // Help
  { keywords: ['help', 'commands', 'options', 'what to ask'], response: "Try asking: 'What do you build?', 'How does private AI work?', 'Tell me about FyreOne', 'How much does it cost?', or 'Where are you located?'" },
  
  // Thanks
  { keywords: ['thanks', 'thank you', 'cheers', 'ta'], response: "No worries! Anything else you want to know?" },
  
  // Industries
  { keywords: ['industry', 'industries', 'sector', 'who do you work with', 'clients'], response: "We work with compliance-heavy industries: fire safety, legal, healthcare, finance, government. Anyone who needs AI but can't send their data to the cloud." },
  
  // Timeline / How long
  { keywords: ['how long', 'timeline', 'duration', 'time frame', 'delivery'], response: "Depends on scope. A basic private AI deployment takes 4-6 weeks. Custom software projects vary — we'll scope it properly before committing to timelines." },
  
  // Why Mentaris
  { keywords: ['why mentaris', 'why you', 'different', 'competitor', 'vs'], response: "We're not just consultants who demo and disappear. We implement systems that actually work in production. We come from industry (fire safety) so we understand compliance pain firsthand." },
];

function findResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  
  // Check each pattern
  for (const pattern of responsePatterns) {
    for (const keyword of pattern.keywords) {
      if (lower.includes(keyword)) {
        return pattern.response;
      }
    }
  }
  
  // Smart fallback based on question type
  if (lower.includes('?')) {
    return "Good question — that's probably worth a proper conversation. Book a free 30-min call at mentaris.io/contact and we'll dig into the details.";
  }
  
  return "I'm not sure I understood that. Try asking about our services, private AI, fire compliance, or pricing. Or type 'help' for suggestions.";
}

export default function TerminalChat() {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'system', text: "Mentaris AI v1.0 — ask me anything" },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsTyping(true);
    
    const response = findResponse(userMessage);
    const delay = Math.min(600 + response.length * 10, 2000);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'ai', text: response }]);
      setIsTyping(false);
    }, delay);
  };

  const getMessageStyle = (type: string) => {
    switch (type) {
      case 'user': return 'text-cyan-400';
      case 'ai': return 'text-zinc-300';
      case 'system': return 'text-zinc-600';
      default: return 'text-zinc-400';
    }
  };

  const getPrefix = (type: string) => {
    switch (type) {
      case 'user': return '> ';
      case 'ai': return '← ';
      case 'system': return '# ';
      default: return '';
    }
  };

  return (
    <div 
      className="relative w-full max-w-xl cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs text-zinc-500 font-mono">mentaris-ai</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-zinc-600 font-mono">online</span>
          </div>
        </div>
        
        <div 
          ref={messagesContainerRef}
          className="p-4 font-mono text-sm h-80 overflow-y-auto"
        >
          <div className="space-y-2">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`${getMessageStyle(msg.type)} ${msg.type === 'ai' ? 'pl-3 border-l-2 border-cyan-500/30' : ''}`}
              >
                <span className="opacity-50">{getPrefix(msg.type)}</span>
                {msg.text}
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-zinc-500 pl-3 border-l-2 border-cyan-500/30"
              >
                <span className="opacity-50">← </span>
                <span className="inline-flex gap-1">
                  <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                  <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                  <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
                </span>
              </motion.div>
            )}
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="border-t border-zinc-800">
          <div className="flex items-center px-4 py-3 gap-2">
            <span className="text-cyan-400 font-mono text-sm">→</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isTyping}
              className="flex-1 bg-transparent text-sm font-mono text-zinc-300 placeholder:text-zinc-600 focus:outline-none disabled:opacity-50"
            />
            <span className="text-xs text-zinc-700 font-mono hidden sm:block">enter ↵</span>
          </div>
        </form>
      </div>

      <div className="absolute -inset-px bg-gradient-to-b from-cyan-500/10 to-transparent rounded-lg -z-10 blur-xl" />
    </div>
  );
}
