"use client";

import { motion } from "framer-motion";
import { Lightbulb, Leaf, Award } from "lucide-react";
import { homepageData } from "@/data/homepage";

const uspIconMap: Record<string, React.ReactNode> = {
  "Innovation": <Lightbulb className="w-12 h-12 text-accent-500 mb-6" />,
  "Sustainability": <Leaf className="w-12 h-12 text-accent-500 mb-6" />,
  "Excellence": <Award className="w-12 h-12 text-accent-500 mb-6" />,
};

export default function UniqueSellingPoints() {
  const { title, points } = homepageData.usps;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 w-24 bg-accent-500 mx-auto mt-8 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center text-center p-10 rounded-3xl bg-white border border-brand-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 mb-8 group-hover:scale-110 transition-transform duration-500">
                {uspIconMap[point.title]}
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4 tracking-wide group-hover:text-brand-700 transition-colors relative z-10">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light relative z-10">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
