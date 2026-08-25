
"use client";
import { motion } from "framer-motion";
import { Globe2, HeartHandshake, Leaf, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Link from "next/link";

export default function HealthCommunityPage() {
  const initiatives = [
    {
      title: "Sustainable Access",
      icon: Globe2,
      description: "Contributing to public health through compliant manufacturing and transparent supply chains."
    },
    {
      title: "Community Engagement",
      icon: HeartHandshake,
      description: "Focusing on health awareness, education, and skill development through structured, long-term programs."
    },
    {
      title: "Shared Value",
      icon: Leaf,
      description: "Integrating social responsibility into our core mission, addressing unmet medical and societal needs."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Health & Community Initiatives"
        paths={[{ name: "CSR", href: "/" }, { name: "Health & Community" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Advancing Health Access & Well-Being
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed mb-6"
          >
            At Plexus Pharmaco, health and community initiatives are designed as long-term, impact-driven programs aligned with our commitment to strengthening healthcare systems and improving patient outcomes.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Our approach prioritizes sustainable healthcare access, education, and capacity building, particularly in emerging and underserved regions. These efforts support healthcare resilience while addressing unmet medical and societal needs.
          </motion.p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/sustainability" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl">
            View Sustainability Initiatives <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
