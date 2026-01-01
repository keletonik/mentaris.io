import { FadeIn } from '@/components/motion';

export default function PrivacyPage() {
  return (
    <main className="bg-[#111113] min-h-screen">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]" />
        
        <div className="container-narrow relative max-w-3xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase">Legal</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-2">Privacy Policy</h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-zinc-500 font-mono text-sm mb-12">Last updated: December 2024</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-10 text-zinc-400">
              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Introduction</h2>
                <p className="leading-relaxed">
                  Mentaris AI Business Intelligence is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="space-y-2 ml-4 text-zinc-500">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Name and contact information</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Company information</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Service preferences and inquiries</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="space-y-2 ml-4 text-zinc-500">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Provide, operate, and maintain our services</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Improve and personalize your experience</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Understand how you use our services</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Communicate with you about updates and offers</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Protect against fraud and unauthorized use</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Your Rights</h2>
                <p className="leading-relaxed mb-4">You have the right to:</p>
                <ul className="space-y-2 ml-4 text-zinc-500">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Access your personal information</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Correct inaccurate information</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Request deletion of your information</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Object to processing of your information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, please contact us.
                </p>
                <div className="p-5 bg-zinc-900/50 border border-zinc-800">
                  <p className="font-mono text-sm">
                    <span className="text-zinc-600">Email:</span>{" "}
                    <a href="mailto:admin@mentaris.io" className="text-cyan-400 hover:underline">
                      admin@mentaris.io
                    </a>
                  </p>
                  <p className="font-mono text-sm mt-2">
                    <span className="text-zinc-600">Address:</span>{" "}
                    <span className="text-zinc-400">Level 12, 123 Pitt Street, Sydney NSW 2000, Australia</span>
                  </p>
                </div>
              </section>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
