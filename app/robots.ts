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
    sitemap: 'https://plexuspharmaco.eu/sitemap.xml',
  };
}
