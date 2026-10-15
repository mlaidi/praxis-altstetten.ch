/**
 * Dynamic Sitemap Generator
 * 
 * Next.js App Router convention: exporting a default function from
 * app/sitemap.js automatically generates /sitemap.xml
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import { SERVICES } from '@/data/siteData';

const BASE_URL = 'https://praxis-altstetten.ch';

export default function sitemap() {
  /* ── Static pages ── */
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  /* ── Dynamic service pages ── */
  const servicePages = SERVICES.map((service) => ({
    url: `${BASE_URL}/leistungen/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
