"use client";

import { motion } from "framer-motion";
import { Leaf, HeartHandshake, BookOpen } from "lucide-react";
import Image from "next/image";

export default function CSRSection() {
  const initiatives = [
    {
      title: "Environmental Sustainability",
      desc: "Committed to carbon-neutral operations by 2030, implementing green chemistry in our manufacturing processes.",
      icon: Leaf,
    },
    {
      title: "Patient Access Programs",
      desc: "Ensuring life-saving therapies reach underserved communities globally through affordable pricing models.",
      icon: HeartHandshake,
    },
    {
      title: "Medical Education",
      desc: "Funding independent research and providing continuous medical education to healthcare professionals worldwide.",
      icon: BookOpen,
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-brand-900 mb-6"
            >
              Corporate Social Responsibility
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-10 leading-relaxed"
            >
              Beyond the laboratory, Plexuspharmaco is deeply committed to making a positive, sustainable impact on the environment and society. Our CSR initiatives are integrated into our core business strategy.
            </motion.p>

            <div className="space-y-8">
              {initiatives.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-accent-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group"
            >
              <Image 
                src="/assets/images/pharma_hero_lab.png"
                alt="Corporate Social Responsibility & Clean Production"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
