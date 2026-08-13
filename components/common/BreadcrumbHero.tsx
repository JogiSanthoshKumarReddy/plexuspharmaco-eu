import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Script from "next/script";

interface BreadcrumbHeroProps {
  title: string;
  paths: { name: string; href?: string }[];
  bgImage?: string;
}

export default function BreadcrumbHero({ title, paths, bgImage = "/assets/images/breadcrumb/breadcrumb-1.jpg" }: BreadcrumbHeroProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://plexuspharmaco.eu"
      },
      ...paths.map((path, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": path.name,
        "item": path.href ? `https://plexuspharmaco.eu${path.href}` : undefined
      }))
    ]
  };

  return (
    <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center overflow-hidden bg-brand-900 mt-20">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-brand-200 text-sm md:text-base">
          <Link href="/" className="hover:text-white transition-colors font-medium">Home</Link>
          {paths.map((path, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-brand-400" />
              {path.href ? (
                <Link href={path.href} className="hover:text-white transition-colors font-medium">
                  {path.name}
                </Link>
              ) : (
                <span className="text-white font-medium">{path.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
