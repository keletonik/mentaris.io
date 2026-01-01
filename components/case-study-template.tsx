import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Check, Quote } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
}

interface ChallengePoint {
  text: string;
}

interface SolutionFeature {
  title: string;
  description: string;
}

interface ResultPoint {
  text: string;
}

interface CaseStudyProps {
  client: string;
  industry: string;
  service: string;
  title: string;
  image: string;
  overview: string;
  challenge: string;
  challengePoints: ChallengePoint[];
  solution: string;
  solutionFeatures: SolutionFeature[];
  results: string;
  resultPoints: ResultPoint[];
  metrics: Metric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function CaseStudyTemplate({
  client,
  industry,
  service,
  title,
  image,
  overview,
  challenge,
  challengePoints,
  solution,
  solutionFeatures,
  results,
  resultPoints,
  metrics,
  testimonial,
}: CaseStudyProps) {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-3 mb-6">
            <span className="px-4 py-1 bg-[#00d4ff] text-[#0a0a0a] text-sm font-bold rounded-full">
              {industry}
            </span>
            <span className="px-4 py-1 bg-[#0066FF] text-white text-sm font-bold rounded-full">
              {service}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {title}
          </h1>
          <div className="text-2xl text-[#00d4ff] font-semibold mb-8">
            {client}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics?.map((metric, index) => (
              <div key={index} className="glass-strong rounded-xl p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {metric?.value ?? ''}
                </div>
                <div className="text-gray-400">{metric?.label ?? ''}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto py-16">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            {overview}
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            The <span className="gradient-text">Challenge</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-6">
            {challenge}
          </p>
          <div className="space-y-3">
            {challengePoints?.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#0066FF]/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                </div>
                <p className="text-gray-300 leading-relaxed">{point?.text ?? ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            The <span className="gradient-text">Solution</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            {solution}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionFeatures?.map((feature, index) => (
              <div key={index} className="glass rounded-xl p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#00d4ff] rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {feature?.title ?? ''}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature?.description ?? ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            The <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-6">
            {results}
          </p>
          <div className="space-y-3">
            {resultPoints?.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-1" />
                <p className="text-gray-300 leading-relaxed">{point?.text ?? ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0066FF]/20 via-[#0a0a0a] to-[#00d4ff]/20">
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong rounded-2xl p-8 md:p-12">
              <Quote className="w-12 h-12 text-[#00d4ff] mb-6" />
              <p className="text-2xl text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial?.quote ?? ''}"
              </p>
              <div>
                <div className="text-lg font-semibold text-white">
                  {testimonial?.author ?? ''}
                </div>
                <div className="text-sm text-[#00d4ff]">
                  {testimonial?.role ?? ''}, {client}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Business</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00d4ff] text-white rounded-lg hover:shadow-2xl hover:shadow-[#0066FF]/50 transition-all text-lg font-semibold"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 glass text-white rounded-lg hover:glass-strong transition-all text-lg font-semibold"
            >
              More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
