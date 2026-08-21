import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Import JSON data
import productsData from '@/data/products.json';
import { pressReleases } from '@/data/press-releases';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://plexuspharmaco.eu';
const LOCALES = ['en', 'de', 'fr', 'es'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Add the root homepage for all locales
  LOCALES.forEach(locale => {
    routes.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    });
  });

  // Dynamically find all static routes in app/[locale]
  try {
    const localeDir = path.join(process.cwd(), 'app', '[locale]');
    
    // Recursive function to find all directories with page.tsx
    const findRoutes = (dir: string, baseRoute: string = '') => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          // Ignore admin, sub (if they are meant to be private/unindexed), and dynamic [id] folders
          if (entry.name === 'admin' || entry.name.startsWith('[')) continue;
          
          const newBase = baseRoute ? `${baseRoute}/${entry.name}` : entry.name;
          const fullPath = path.join(dir, entry.name);
          
          // If a page.tsx exists here, it's a valid route
          if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
            // Generate a localized URL for each supported language
            LOCALES.forEach(locale => {
              routes.push({
                url: `${BASE_URL}/${locale}/${newBase}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
              });
            });
          }
          
          findRoutes(fullPath, newBase);
        }
      }
    };
    
    findRoutes(localeDir);
  } catch (error) {
    console.error('Error generating static routes for sitemap:', error);
  }

  // Add Dynamic Product Routes
  if (Array.isArray(productsData)) {
    productsData.forEach((product: { id: string }) => {
      if (product && product.id) {
        LOCALES.forEach(locale => {
          routes.push({
            url: `${BASE_URL}/${locale}/product-catalogue/${product.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
          });
        });
      }
    });
  }

  // Add Dynamic Press Release Routes
  if (Array.isArray(pressReleases)) {
    pressReleases.forEach((pr) => {
      if (pr && pr.id) {
        LOCALES.forEach(locale => {
          routes.push({
            url: `${BASE_URL}/${locale}/press-release/${pr.id}`,
            lastModified: new Date(pr.date || new Date()), // Try to use actual PR date if available
            changeFrequency: 'yearly',
            priority: 0.6,
          });
        });
      }
    });
  }

  return routes;
}
