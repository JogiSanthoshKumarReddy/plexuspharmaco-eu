"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { pressReleases } from "@/data/press-releases";

export default function LatestNews() {
  // Show only the first 3 press releases on the homepage
  const newsItems = pressReleases.slice(0, 3);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <Link href={`/press-release/${item.id}`} key={item.id} className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card hover-lift rounded-3xl overflow-hidden flex flex-col h-full bg-white"
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
                  {item.summary}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-brand-700 font-bold text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
