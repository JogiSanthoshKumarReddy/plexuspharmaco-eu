"use client";

import { motion } from "framer-motion";
import { Milestone } from "lucide-react";

const milestones = [
  { year: "2003", title: "Inception", description: "Plexus Pharmaco was founded with a vision to deliver high-quality pharmaceutical solutions." },
  { year: "2010", title: "Global Expansion", description: "Expanded operations into the European and North American markets, establishing strategic hubs." },
  { year: "2015", title: "R&D Excellence", description: "Opened our modern, validated Research & Development center in France, focusing on novel therapeutics." },
  { year: "2020", title: "Sustainable Manufacturing", description: "Achieved carbon-neutral manufacturing across our primary facilities in Germany." },
  { year: "2025", title: "Future Horizons", description: "Launching a new portfolio of advanced biologics targeting unmet medical needs globally." }
];

export default function CompanyTimeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-900 mb-6"
          >
            Our Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Over two decades of relentless innovation, strategic global expansion, and an unwavering commitment to improving patient lives.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-100 transform md:-translate-x-1/2" />

          {milestones.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center mb-12 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-brand-900 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 flex items-center justify-center z-10 text-white">
                  <Milestone className="w-3 h-3" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`bg-slate-50 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                    <span className="text-accent-600 font-black text-xl mb-2 block">{milestone.year}</span>
                    <h3 className="text-2xl font-bold text-brand-900 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
