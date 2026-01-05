'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Message {
  type: 'user' | 'ai' | 'system';
  text: string;
}

const responses: Record<string, string> = {
  // Greetings
  'hello': "Hello! I'm the Mentaris AI assistant. Ask me about our services, private AI deployment, or fire compliance solutions.",
  'hi': "Hi there! How can I help you today? I can tell you about private AI, our services, or answer questions about fire compliance.",
  'hey': "Hey! Welcome to Mentaris. What would you like to know?",
  
  // Services
  'services': "We offer: Private AI Assistants (on your infrastructure), Custom Software Development, AI Consulting, and Cybersecurity solutions. Which interests you?",
  'what do you do': "We implement AI for businesses that can't afford to fall behind. We analyse operations, identify opportunities, and build systems that actually work. No demos that go nowhere.",
  'pricing': "Every project is scoped individually based on complexity. Book a free 30-minute assessment and we'll give you a realistic estimate. No pressure, no pitch.",
  'cost': "Costs vary by project scope. Private AI deployments typically start from $15k for SMBs. Book a call for accurate pricing tailored to your needs.",
  
  // Private AI
  'private ai': "Private AI means your AI runs on YOUR infrastructure. Your data never leaves your servers. Perfect for legal, healthcare, finance, and compliance-heavy industries.",
  'data privacy': "With our Private AI solution, your data stays on your servers. We deploy models locally — nothing goes to OpenAI, Google, or any third party.",
  'security': "Security is core to what we do. Private deployment, no external API calls, full audit trails. We also offer dedicated cybersecurity services.",
  
  // Fire compliance
  'fire': "Our FyreOne AI platform handles fire safety compliance — trained on AS 1851, NCC, and Australian standards. It can analyse documents, track schedules, and draft reports.",
  'fyreone': "FyreOne AI is our fire safety compliance platform. Mobile app for on-site questions, desktop suite for document control and audits. Trained on Australian fire standards.",
  'compliance': "We specialise in compliance-heavy industries. Our AI can process regulatory documents, extract requirements, and help you stay ahead of audits.",
  'as 1851': "AS 1851 is our bread and butter. FyreOne AI is trained on the full standard and can answer questions, generate inspection schedules, and flag compliance gaps.",
  
  // Technical
  'how does it work': "We deploy open-source models (Llama, Mistral) on your infrastructure, fine-tune them on your documents, and integrate with your existing systems. You own everything.",
  'what models': "We typically use Llama 3, Mistral, or Qwen depending on your needs. All open-source, all deployed locally. No vendor lock-in.",
  'integration': "We integrate with your existing tools — document management, CRMs, ERPs. API-first approach means your AI works where your team already works.",
  
  // Company
  'who are you': "Mentaris is an AI implementation consultancy based in Sydney, Australia. We work with clients globally who need AI that actually delivers results.",
  'location': "We're based in Sydney, Australia, but work with clients globally. Most of our work is remote-friendly.",
  'contact': "You can reach us at admin@mentaris.io or book a free assessment through the Contact page. We'll get back to you within 24 hours.",
  
  // Meta
  'help': "Try asking about: our services, private AI, fire compliance, FyreOne, pricing, or how we work. Or just say what you need!",
};

function findResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  
  // Direct match
  if (responses[lower]) return responses[lower];
  
  // Keyword matching
  for (const [key, value] of Object.entries(responses)) {
    if (lower.includes(key)) return value;
  }
  
  // Fallback
  return "That's a great question for a deeper conversation. Book a free 30-minute call at mentaris.io/contact and we'll discuss your specific needs.";
}

export default function TerminalChat() {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'system', text: "Mentaris AI Assistant v1.0" },
    { type: 'system', text: "Type a question and press Enter..." },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    
    // Simulate thinking
    setIsTyping(true);
    
    // Get response
    const response = findResponse(userMessage);
    
    // Simulate typing delay based on response length
    const delay = Math.min(800 + response.length * 15, 2500);
    
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
      {/* Terminal window */}
      <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
        {/* Title bar */}
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
        
        {/* Messages */}
        <div className="p-4 font-mono text-sm h-80 overflow-y-auto">
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
            
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t border-zinc-800">
          <div className="flex items-center px-4 py-3 gap-2">
            <span className="text-cyan-400 font-mono text-sm">→</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services..."
              disabled={isTyping}
              className="flex-1 bg-transparent text-sm font-mono text-zinc-300 placeholder:text-zinc-600 focus:outline-none disabled:opacity-50"
            />
            <span className="text-xs text-zinc-700 font-mono hidden sm:block">enter ↵</span>
          </div>
        </form>
      </div>

      {/* Subtle glow */}
      <div className="absolute -inset-px bg-gradient-to-b from-cyan-500/10 to-transparent rounded-lg -z-10 blur-xl" />
    </div>
  );
}
