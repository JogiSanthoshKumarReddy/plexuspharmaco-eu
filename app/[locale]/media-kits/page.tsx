"use client";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import { Download, FileText, Image as ImageIcon, Briefcase } from "lucide-react";

export default function MediaKitsPage() {
  const kits = [
    {
      title: "Corporate Brand Guidelines",
      description: "Official color palettes, typography, and logo usage rules for Plexus Pharmaco Europe.",
      icon: <FileText className="w-8 h-8 text-brand-600" />,
      size: "2.4 MB PDF"
    },
    {
      title: "High-Res Logo Pack",
      description: "Vector and raster formats (SVG, PNG, EPS) for print and digital media.",
      icon: <ImageIcon className="w-8 h-8 text-brand-600" />,
      size: "18.1 MB ZIP"
    },
    {
      title: "Executive Headshots",
      description: "Professional portraits of our Board of Directors and C-Suite leadership team.",
      icon: <Briefcase className="w-8 h-8 text-brand-600" />,
      size: "45.2 MB ZIP"
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Media Kits"
        paths={[{ name: "Media Center", href: "/media" }, { name: "Media Kits" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Official Press Assets</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            These assets are provided for use by verified journalists and media organizations. By downloading, you agree to adhere to our Corporate Brand Guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kits.map((kit, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow flex flex-col h-full text-center group">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {kit.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{kit.title}</h3>
              <p className="text-slate-600 text-sm mb-8 flex-grow">{kit.description}</p>
              
              <button onClick={() => alert(`Downloading ${kit.title}...`)} className="w-full flex items-center justify-center gap-2 py-3 bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-100 transition-colors">
                <Download className="w-4 h-4" /> Download ({kit.size})
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
