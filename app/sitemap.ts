import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://plexuspharmaco.eu';

  // Core static routes
  const routes = [
    '',
    '/about',
    '/product-catalogue',
    '/business-enquiry',
    '/contact',
    '/compilance-reporting',
    '/corporate-governance',
    '/sustainability',
    '/investor-relation',
    '/global-office',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes];
}
