
"use client";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight, Video } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Link from "next/link";

export default function EventPage() {
  const events = [
    {
      title: "Global Conference on Pharmaceutics & Novel Drug Delivery Systems (PPDS)",
      date: "02 Feb 2026",
      location: "London, UK",
      type: "In-Person",
    },
    {
      title: "International Conferences on Nutrition & Health / Dietary Science Series",
      date: "02 Feb 2026",
      location: "Geneva, Switzerland",
      type: "Hybrid",
    },
    {
      title: "European Pharma Outsourcing Summit",
      date: "02 Feb 2026",
      location: "Frankfurt, Germany",
      type: "In-Person",
    },
    {
      title: "Pharmapack Europe — Packaging & Drug Delivery Innovation Summit",
      date: "02 Feb 2026",
      location: "Paris, France",
      type: "In-Person",
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Events & Conferences"
        paths={[{ name: "News & Media", href: "/media" }, { name: "Events" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Connect with Plexus Pharmaco
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Meet our leadership team and scientific experts at major global healthcare conferences, trade shows, and industry summits. 
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 text-sm font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                  <CalendarDays className="w-4 h-4" />
                  {event.date}
                </div>
                {event.type === "Hybrid" && (
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    <Video className="w-3 h-3" /> Hybrid
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-brand-900 mb-6 group-hover:text-brand-700 transition-colors flex-grow">
                {event.title}
              </h3>
              
              <div className="flex items-center gap-2 text-slate-500 mb-8 pt-4 border-t border-slate-100">
                <MapPin className="w-5 h-5 text-brand-300" />
                <span className="font-medium">{event.location}</span>
              </div>
              
              <Link href="/business-enquiry" className="inline-flex items-center gap-2 text-brand-700 font-bold hover:text-brand-900 transition-colors mt-auto">
                Event Details <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-900 rounded-3xl p-12 text-center text-white relative overflow-hidden mt-24">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Request a Meeting</h3>
            <p className="text-brand-200 mb-8 text-lg">
              Attending one of these events? Schedule a private meeting with our business development or scientific teams.
            </p>
            <Link href="/business-enquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-900 rounded-xl font-bold hover:bg-brand-50 transition-colors">
              Schedule Meeting <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
