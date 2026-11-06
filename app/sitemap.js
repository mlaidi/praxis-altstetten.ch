/**
 * Dynamic Sitemap Generator – Hausarztpraxis Zürich Altstetten
 * Generates /sitemap.xml automatically with current lastmod.
 */

import { SERVICES, TEAM } from '@/data/siteData';

const BASE_URL = 'https://praxis-altstetten.ch';

export default function sitemap() {
  const currentDate = new Date();

  /* ── Static pages ── */
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  /* ── Dynamic service pages (all 12 rewritten services) ── */
  const servicePages = SERVICES.map((service) => ({
    url: `${BASE_URL}/leistungen/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  /* ── Dynamic doctor profile pages (all 7 practitioners) ── */
  const doctorPages = TEAM.map((member) => ({
    url: `${BASE_URL}/aerzte/${member.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...doctorPages];
}
