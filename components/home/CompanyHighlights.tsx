"use client";

import { motion } from "framer-motion";
import { Factory, ShieldCheck, Globe } from "lucide-react";
import { homepageData } from "@/data/homepage";

const iconMap: Record<string, React.ReactNode> = {
  "factory": <Factory className="w-10 h-10 text-brand-600" />,
  "shield-check": <ShieldCheck className="w-10 h-10 text-brand-600" />,
  "globe": <Globe className="w-10 h-10 text-brand-600" />,
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
    <section className="py-24 bg-brand-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-brand-900 mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-600 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-100 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-100 transition-transform duration-300">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-2xl font-semibold text-brand-900 mb-4">{feature.title}</h3>
              <p className="text-brand-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
