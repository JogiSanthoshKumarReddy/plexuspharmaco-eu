
"use client";
import { motion } from "framer-motion";
import { Newspaper, Calendar, Image as ImageIcon, ArrowRight, Video, Mail } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";


export default function MediaCenterPage() {
  const pressReleases = [
    { title: "Plexuspharmaco Receives Fast-Track Designation for Novel Oncology Pipeline", date: "Aug 15, 2026", type: "Press Release" },
    { title: "Expansion of Global API Manufacturing Capacity by 40%", date: "Jul 28, 2026", type: "Corporate News" },
    { title: "Q2 2026 Financial Results Exceed Analyst Expectations", date: "Jul 10, 2026", type: "Financials" },
    { title: "Sustainability Report 2026: Achieving Zero-Liquid Discharge", date: "Jun 10, 2026", type: "Sustainability" }
  ];

  const events = [
    { title: "CPHI Worldwide 2026", date: "Oct 24-26, 2026", location: "Barcelona, Spain" },
    { title: "Global Pharma Summit", date: "Nov 12-14, 2026", location: "Dubai, UAE" },
    { title: "European Oncology Symposium", date: "Dec 05, 2026", location: "Berlin, Germany" }
  ];

  const articles = [
    {
      title: "Leadership & Vision: Plexuspharmaco's Science-Led Growth Journey",
      date: "02-02-2026",
      summary: "Media profiles often reference the leadership vision driving Plexuspharmaco's growth trajectory. A strong emphasis on science, quality, and ethics defines the Group's culture.",
      image: "/assets/images/pharma_hero_corporate.png"
    },
    {
      title: "Diversified Portfolio Drives Plexuspharmaco's Market Relevance",
      date: "02-02-2026",
      summary: "Media commentary highlights Plexuspharmaco's broad portfolio covering pharma FDFs, nutraceuticals, medical devices, dermo-cosmetics, and biological products.",
      image: "/assets/images/pharma_hero_mfg.png"
    },
    {
      title: "Global Expansion Story: Expanding International Presence",
      date: "15-01-2026",
      summary: "Media features have highlighted Plexuspharmaco's expanding footprint across Europe, LATAM, Africa, Asia, and GCC regions.",
      image: "/assets/images/pharma_hero_corporate.png"
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Media & News Center"
        paths={[{ name: "Corporate", href: "/" }, { name: "Media Center" }]}
        bgImage="/assets/images/pharma_hero_mfg.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-8 leading-tight"
          >
            Corporate Communications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed font-light"
          >
            Stay updated with the latest breakthroughs, financial milestones, and corporate announcements from Plexuspharmaco as we continue to shape the future of global healthcare.
          </motion.p>
        </div>

        {/* Top Section: Press Releases & Events */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          
          {/* Press Releases */}
          <div className="w-full lg:w-2/3 bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
              <h3 className="text-2xl font-bold text-brand-900 flex items-center gap-3">
                <Newspaper className="w-6 h-6 text-brand-700" /> Press Releases
              </h3>
              <button onClick={() => alert('Navigating to full archive...')} className="text-brand-700 font-bold hover:text-brand-900 text-sm">View All Archive</button>
            </div>
            <div className="space-y-6">
              {pressReleases.map((pr, idx) => (
                <Link href="/press-release" key={idx} className="block group flex flex-col sm:flex-row justify-between sm:items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{pr.date}</span>
                      <span className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 text-xs font-bold">{pr.type}</span>
                    </div>
                    <h4 className="text-lg font-bold text-brand-900 group-hover:text-brand-600 transition-colors">{pr.title}</h4>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-700 group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
                </Link>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="w-full lg:w-1/3 bg-brand-900 rounded-[2rem] p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
              <Image src="/assets/images/pharma_hero_lab.png" alt="Texture" fill className="object-cover" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 border-b border-white/10 pb-6">
                <Calendar className="w-6 h-6 text-accent-500" /> Upcoming Events
              </h3>
              <div className="space-y-8">
                {events.map((event, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-brand-200 transition-colors">{event.title}</h4>
                      <p className="text-sm text-brand-200/80 mb-1">{event.date}</p>
                      <p className="text-xs font-bold text-accent-400 uppercase tracking-wider">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Media Coverage Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-brand-900 mb-10 text-center">Featured Media Coverage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => alert(`Opening full article: ${article.title}`)}
                className="bg-white hover-lift overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm flex flex-col h-full group cursor-pointer"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-700 uppercase tracking-wider mb-4">
                    {article.date}
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-brand-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow font-light line-clamp-3">
                    {article.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand-700 font-bold text-sm group-hover:gap-3 transition-all">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Multimedia Assets */}
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-sm text-center">
          <h3 className="text-3xl font-bold text-brand-900 mb-6">Media Kits & Assets</h3>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">High-resolution corporate logos, executive headshots, and B-roll footage available for verified press and media organizations.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => window.location.href = '/gallery'} className="flex items-center gap-3 px-8 py-4 bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-100 transition-colors">
              <ImageIcon className="w-5 h-5" /> View Image Gallery
            </button>
            <button onClick={() => window.location.href = '/gallery'} className="flex items-center gap-3 px-8 py-4 bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-100 transition-colors">
              <Video className="w-5 h-5" /> Access Corporate B-Roll
            </button>
            <button onClick={() => window.location.href = '/business-enquiry'} className="flex items-center gap-3 px-8 py-4 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-colors shadow-md">
              <Mail className="w-5 h-5" /> Contact Press Office
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
