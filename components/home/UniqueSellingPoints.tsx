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
    <section className="py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 bg-accent-500 mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center text-center p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] group"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-accent-500/20 rounded-full blur-xl group-hover:bg-accent-400/40 transition-colors duration-500" />
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {uspIconMap[point.title]}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-accent-400 transition-colors">{point.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
