import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mentaris.io';
  const currentDate = new Date();

  const mainPages = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
  ];

  const servicePages = [
    '/services',
    '/services/ai-tools',
    '/services/custom-software',
    '/services/cybersecurity',
    '/services/malware-analysis',
    '/services/machine-learning',
    '/services/data-analytics',
    '/services/ai-consulting',
  ];

  const blogPages = [
    '/blog',
    '/blog/ai-capabilities-2026',
    '/blog/ai-readiness-signs',
  ];

  const resourcePages = [
    '/resources',
    '/resources/knowledge/intro-ai-models',
    '/resources/knowledge/ai-implementation',
    '/resources/knowledge/measuring-roi',
  ];

  const allPages = [
    ...mainPages,
    ...servicePages,
    ...blogPages,
    ...resourcePages,
  ];

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: page === '' || page === '/blog' ? 'daily' : 'weekly',
    priority: page === '' ? 1.0 : page.startsWith('/services') ? 0.9 : 0.8,
  }));
}
