const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '../app/[locale]');

// Fallback SEO mapping to generate nice descriptions based on route names
const seoMapping = {
  'about': 'Learn about Plexuspharmaco, a global pharmaceutical company dedicated to innovation, quality, and improving patient outcomes worldwide.',
  'business-enquiry': 'Partner with Plexuspharmaco. Contact our global business development team for distribution, licensing, and manufacturing inquiries.',
  'product-catalogue': 'Explore Plexuspharmaco\'s comprehensive portfolio of high-quality, regulatory-compliant pharmaceutical and nutraceutical products.',
  'sustainability': 'Discover our commitment to environmental responsibility, green chemistry, and sustainable pharmaceutical manufacturing.',
  'corporate-governance': 'Review Plexuspharmaco\'s corporate governance frameworks, ethical standards, and leadership principles.',
  'quality-assurance': 'Learn how Plexuspharmaco embeds Quality by Design (QbD) across all global manufacturing and supply chain operations.',
  'research-development': 'Explore our robust R&D engine dedicated to complex generics, novel drug delivery systems, and advanced therapeutics.',
  'manufacture-capability': 'Discover our WHO and EU GMP-certified global manufacturing network and high-precision production facilities.',
  'investor-relation': 'Access financial reports, corporate presentations, and investor updates for Plexuspharmaco Europe.',
  'media': 'Read the latest corporate news, press releases, and media updates from Plexuspharmaco.',
  'careers': 'Join our team of dedicated professionals advancing global healthcare. Explore current job openings at Plexuspharmaco.',
};

function generateDescription(title, routeSegment) {
  if (seoMapping[routeSegment]) return seoMapping[routeSegment];
  // Fallback generic description
  return `Explore information regarding ${title} at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.`;
}

function processDirectory(dir, routeSegment = '') {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Avoid parsing special folders starting with '(' if any, though standard next.js routes are fine
      processDirectory(fullPath, routeSegment ? `${routeSegment}/${file}` : file);
    } else if (file === 'layout.tsx') {
      // Don't modify the root layout
      if (fullPath === path.join(rootDir, 'layout.tsx')) continue;
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Match the existing metadata block
      const metadataRegex = /export const metadata:\s*Metadata\s*=\s*{([\s\S]*?)};/;
      const match = content.match(metadataRegex);
      
      if (match) {
        // Extract the title
        let titleMatch = match[1].match(/title:\s*["']([^"']+)["']/);
        let title = titleMatch ? titleMatch[1] : 'Plexuspharmaco';
        
        let description = generateDescription(title, routeSegment);
        let canonicalUrl = `/${routeSegment}`;
        
        const newMetadataBlock = `export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
  alternates: {
    canonical: "${canonicalUrl}",
  },
  openGraph: {
    title: "${title} | Plexuspharmaco Europe",
    description: "${description}",
    url: "${canonicalUrl}",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "${title} - Plexuspharmaco Europe",
      },
    ],
  },
};`;
        
        content = content.replace(metadataRegex, newMetadataBlock);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated SEO metadata for: /${routeSegment} (Title: ${title})`);
      }
    }
  }
}

console.log('Starting SEO Metadata Injection...');
processDirectory(rootDir);
console.log('SEO Metadata Injection Complete.');
