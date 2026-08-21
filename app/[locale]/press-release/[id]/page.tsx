import { pressReleases } from "@/data/press-releases";
import { notFound } from "next/navigation";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return pressReleases.map((pr) => ({
    id: pr.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string, locale: string }> }) {
  const resolvedParams = await params;
  const release = pressReleases.find((pr) => pr.id === resolvedParams.id);
  
  if (!release) return { title: "Not Found" };

  return {
    title: release.title,
    description: release.summary,
    alternates: {
      canonical: `/${resolvedParams.locale}/press-release/${release.id}`,
    },
    openGraph: {
      title: release.title,
      description: release.summary,
      images: [{ url: release.image }],
    }
  };
}

export default async function PressReleaseArticle({ params }: { params: Promise<{ id: string, locale: string }> }) {
  const resolvedParams = await params;
  const release = pressReleases.find((pr) => pr.id === resolvedParams.id);
  
  if (!release) {
    notFound();
  }

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Corporate News"
        paths={[
          { name: "News & Media", href: "/media" }, 
          { name: "Press Releases", href: "/press-release" },
          { name: "Article" }
        ]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <Link href="/press-release" className="inline-flex items-center gap-2 text-brand-700 font-bold mb-8 hover:text-brand-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Press Releases
        </Link>
        
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-slate-500 mb-6">
            <span className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
              <Calendar className="w-4 h-4 text-brand-600" /> {release.date}
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
              <User className="w-4 h-4 text-brand-600" /> {release.author}
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 rounded-full">
              <Tag className="w-4 h-4" /> {release.category}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-tight mb-8">
            {release.title}
          </h1>
          
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg mb-12">
            <Image 
              src={release.image} 
              alt={release.title} 
              fill 
              className="object-cover"
            />
          </div>
        </header>

        <article className="prose prose-lg max-w-none text-slate-700">
          <p className="text-xl leading-relaxed text-slate-800 font-medium mb-8">
            {release.summary}
          </p>
          <div className="leading-loose">
            {release.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
