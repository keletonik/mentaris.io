import { FadeIn } from '@/components/motion';

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-2">Terms of Service</h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-zinc-500 font-mono text-sm mb-12">Last updated: December 2024</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-10 text-zinc-400">
              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using the services provided by Mentaris AI Business Intelligence, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Services Description</h2>
                <p className="leading-relaxed">
                  Mentaris provides AI solutions, custom software development, and cybersecurity services. The specific terms of each engagement will be outlined in individual service agreements.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Intellectual Property</h2>
                <p className="leading-relaxed mb-4">
                  All content, features, and functionality of our services are owned by Mentaris and are protected by intellectual property laws. Unless otherwise agreed in writing:
                </p>
                <ul className="space-y-2 ml-4 text-zinc-500">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Pre-existing IP remains with its owner</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Custom deliverables are transferred upon full payment</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span>Mentaris may retain general knowledge and techniques</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Confidentiality</h2>
                <p className="leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our engagement. This obligation survives the termination of our business relationship.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, Mentaris shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of New South Wales, Australia, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us.
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
