"use client";
import { motion } from "framer-motion";
import { Megaphone, Calendar, ChevronRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import { pressReleases } from "@/data/press-releases";
import Link from "next/link";

export default function PressReleasePage() {
  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Press Releases"
        paths={[{ name: "News & Media", href: "/media" }, { name: "Press Releases" }]}
        bgImage="/assets/images/pharma_hero_mfg.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 mb-6 shadow-sm"
          >
            <Megaphone className="w-4 h-4 text-brand-700" />
            <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Official Announcements</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-8 leading-tight"
          >
            Corporate News & Updates
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Stay informed with the latest official announcements and corporate developments from Plexus Pharmaco Group. This section highlights key milestones, global expansions, strategic partnerships, manufacturing advancements, and governance initiatives across our integrated healthcare ecosystem.
          </motion.p>
        </div>

        {/* Press Releases Feed */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {pressReleases.map((release, idx) => (
            <Link href={`/press-release/${release.id}`} key={release.id} className="block group">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card hover-lift p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 border border-transparent hover:border-slate-200"
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 w-fit px-3 py-1 rounded-full border border-slate-100 mb-3">
                    <Calendar className="w-4 h-4 text-brand-500" />
                    {release.date}
                  </div>
                  <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full">{release.category}</span>
                </div>
                
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-brand-700 transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed line-clamp-2">
                    {release.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-bold text-brand-700 group-hover:text-brand-900 transition-colors group-hover:gap-3">
                    Read Full Release <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
