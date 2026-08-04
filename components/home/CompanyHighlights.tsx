"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, ShieldCheck, Globe } from "lucide-react";
import { homepageData } from "@/data/homepage";

const iconMap: Record<string, React.ReactNode> = {
  "factory": <Factory className="w-8 h-8 text-white" />,
  "shield-check": <ShieldCheck className="w-8 h-8 text-white" />,
  "globe": <Globe className="w-8 h-8 text-white" />,
};

export default function CompanyHighlights() {
  const { title, description, features } = homepageData.highlights;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed font-light"
          >
            {description}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group overflow-hidden flex flex-col hover:-translate-y-2 relative"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center border border-white/20 shadow-lg group-hover:-translate-y-2 group-hover:bg-accent-500 transition-all duration-300 z-10">
                  {/* Note: Icon needs to dynamically handle light/dark based on bg, assuming iconMap provides light icons */}
                  {iconMap[feature.icon]}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col relative z-10 bg-white">
                <h3 className="text-2xl font-bold text-brand-900 mb-4 tracking-wide group-hover:text-brand-700 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed flex-grow">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
