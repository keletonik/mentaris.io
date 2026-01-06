import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: 'Mentaris - AI Business Intelligence & Cybersecurity Solutions',
    template: '%s | Mentaris',
  },
  description: 'Leading provider of AI solutions, custom software development, cybersecurity, machine learning, and malware analysis services. Transform your business with cutting-edge AI technology in Sydney, Australia.',
  keywords: [
    'AI solutions',
    'artificial intelligence',
    'machine learning',
    'cybersecurity',
    'malware analysis',
    'custom software development',
    'data analytics',
    'AI consulting',
    'business intelligence',
    'AI tools development',
    'Sydney AI company',
    'Australia AI services',
  ],
  authors: [{ name: 'Mentaris' }],
  creator: 'Mentaris',
  publisher: 'Mentaris',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/logo-transparent.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://mentaris.io',
    title: 'Mentaris - AI Business Intelligence & Cybersecurity Solutions',
    description: 'Leading provider of AI solutions, custom software development, cybersecurity, machine learning, and malware analysis services. Transform your business with cutting-edge AI technology in Sydney, Australia.',
    siteName: 'Mentaris',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mentaris AI Business Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentaris - AI Business Intelligence & Cybersecurity Solutions',
    description: 'Leading provider of AI solutions, custom software development, cybersecurity, machine learning, and malware analysis services.',
    images: ['/og-image.png'],
    creator: '@mentaris',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  metadataBase: new URL('https://mentaris.io'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mentaris',
    description: 'Leading provider of AI solutions, custom software development, cybersecurity, and machine learning services.',
    url: 'https://mentaris.io',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Mentari_Ooredoo.svg',
    image: 'https://mentaris.io/og-image.png',
    email: 'admin@mentaris.io',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Level 12, 123 Pitt Street',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      postalCode: '2000',
      addressCountry: 'AU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+61-2-3456-7890',
      contactType: 'customer service',
      email: 'admin@mentaris.io',
      areaServed: 'AU',
      availableLanguage: ['en'],
    },
    sameAs: [
      'https://linkedin.com/company/mentaris',
      'https://twitter.com/mentaris',
      'https://github.com/mentaris',
    ],
    service: [
      {
        '@type': 'Service',
        name: 'AI Tools Development',
        description: 'Custom AI tools and solutions for business automation and intelligence.',
      },
      {
        '@type': 'Service',
        name: 'Custom Software Development',
        description: 'Tailored software solutions built with cutting-edge technologies.',
      },
      {
        '@type': 'Service',
        name: 'Cybersecurity',
        description: 'Comprehensive cybersecurity solutions to protect your business.',
      },
      {
        '@type': 'Service',
        name: 'Machine Learning',
        description: 'Advanced machine learning models and predictive analytics.',
      },
      {
        '@type': 'Service',
        name: 'Malware Analysis',
        description: 'Expert malware detection, analysis, and threat intelligence.',
      },
      {
        '@type': 'Service',
        name: 'Data Analytics',
        description: 'Transform data into actionable business insights.',
      },
    ],
  };

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#111113] text-zinc-100 antialiased">
        <Navigation />
        <div className="pt-16 lg:pt-20">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
