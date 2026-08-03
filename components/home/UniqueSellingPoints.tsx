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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-brand-900"
          >
            {title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 bg-accent-500 mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-brand-50 hover:bg-brand-100 transition-colors duration-300"
            >
              {uspIconMap[point.title]}
              <h3 className="text-2xl font-bold text-brand-900 mb-4">{point.title}</h3>
              <p className="text-brand-600 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
