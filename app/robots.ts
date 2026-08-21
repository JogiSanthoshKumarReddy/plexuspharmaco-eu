import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://plexuspharmaco.eu'}/sitemap.xml`,
  };
}
