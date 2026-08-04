"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    title: "Plexuspharmaco Receives Fast-Track Designation for Novel Oncology Pipeline",
    category: "Press Release",
    date: "Aug 15, 2026",
    author: "Corporate Comms",
    image: "/assets/images/ai/hero_slide_3.png",
    excerpt: "The European Medicines Agency has granted fast-track designation for our latest targeted therapy, accelerating the path to market for critical patient care."
  },
  {
    title: "Expansion of Global API Manufacturing Capacity by 40%",
    category: "Corporate News",
    date: "Jul 28, 2026",
    author: "Operations",
    image: "/assets/images/ai/manufacturing_1785826419695.png",
    excerpt: "To meet surging global demand, Plexuspharmaco has committed €150M to expand our active pharmaceutical ingredient facilities in Europe and Asia."
  },
  {
    title: "Sustainability Report 2026: Achieving Zero-Liquid Discharge",
    category: "Sustainability",
    date: "Jun 10, 2026",
    author: "ESG Board",
    image: "/assets/images/ai/csr_sustainability.png",
    excerpt: "Our commitment to the planet reaches a new milestone as all core manufacturing sites achieve 100% zero-liquid discharge and 60% renewable energy use."
  }
];

export default function LatestNews() {
  return (
    <section className="section-padding bg-slate-50 border-t border-slate-200/60">
      <div className="container-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold tracking-wider uppercase mb-6 border border-brand-100">
              News & Media
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-tight">
              Latest Corporate Updates
            </h2>
          </div>
          <Link 
            href="/media" 
            className="inline-flex items-center gap-2 font-bold text-brand-700 hover:text-brand-900 group"
          >
            View All News <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card hover-lift rounded-3xl overflow-hidden group flex flex-col h-full bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-brand-700 shadow-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {item.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {item.author}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-brand-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-light line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-brand-700 font-bold text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
