"use client";
import { motion } from "framer-motion";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Link from "next/link";

export default function MediaPage() {
  const articles = [
    {
      title: "Leadership & Vision: Plexuspharmaco's Science-Led Growth Journey",
      date: "02-02-2026",
      summary: "Media profiles often reference the leadership vision driving Plexuspharmaco's growth trajectory. A strong emphasis on science, quality, and ethics defines the Group's culture. Strategic partnerships and global collaborations support sustained expansion."
    },
    {
      title: "Diversified Portfolio Drives Plexuspharmaco's Market Relevance",
      date: "02-02-2026",
      summary: "Media commentary highlights Plexuspharmaco's broad portfolio covering pharma FDFs, nutraceuticals, medical devices, dermo-cosmetics, and biological products. This diversification mitigates market risk while enabling integrated healthcare offerings."
    },
    {
      title: "Strategic Growth: New Group Companies Strengthen Global Execution",
      date: "02-02-2026",
      summary: "Coverage underscores Plexuspharmaco's expanding international footprint, strengthened by a multi-country manufacturing and supply network. Key announcements reflect strategic growth initiatives, including the formation of new group companies."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Media Coverage"
        paths={[{ name: "News & Media", href: "#" }, { name: "Media Coverage" }]}
        bgImage="/assets/images/breadcrumb/media-bg.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-8 leading-tight"
          >
            Plexuspharmaco in the News
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Plexuspharmaco Group continues to attract industry attention for its integrated global healthcare model, combining science, manufacturing, regulatory expertise, and commercial execution. Together, these updates capture the Group’s leadership vision and science-driven growth journey shaping global healthcare.
          </motion.p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card hover-lift overflow-hidden rounded-3xl flex flex-col h-full group"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 bg-slate-50 w-fit px-3 py-1 rounded-full border border-slate-100">
                  <Calendar className="w-4 h-4 text-brand-500" />
                  {article.date}
                </div>
                
                <h3 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-brand-700 transition-colors line-clamp-3">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 mb-8 line-clamp-4 flex-grow">
                  {article.summary}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-brand-700 font-bold hover:text-brand-900 transition-colors mt-auto">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/press-release" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl">
            View Official Press Releases <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
