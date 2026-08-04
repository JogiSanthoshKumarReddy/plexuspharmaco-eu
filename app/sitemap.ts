import { MetadataRoute } from 'next';

import products from '@/data/products.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://plexuspharmaco.eu';

  // Core static routes
  const staticRoutes = [
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

  // Dynamic product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product-catalogue/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
