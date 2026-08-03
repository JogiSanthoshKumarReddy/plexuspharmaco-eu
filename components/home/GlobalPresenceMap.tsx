"use client";

import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

export default function GlobalPresenceMap() {
  const locations = [
    { name: "European HQ (UK)", top: "30%", left: "48%" },
    { name: "Manufacturing Hub (Germany)", top: "32%", left: "51%" },
    { name: "R&D Center (France)", top: "35%", left: "49%" },
    { name: "Distribution (USA)", top: "40%", left: "22%" },
    { name: "Asia Pacific (Singapore)", top: "60%", left: "78%" },
  ];

  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wider"
          >
            <Globe className="w-4 h-4" /> Global Reach
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-brand-900 mb-6"
          >
            Delivering Healthcare Worldwide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-600 leading-relaxed"
          >
            Our strategically located operational hubs ensure rapid distribution and compliance with international regulatory standards.
          </motion.p>
        </div>

        {/* Abstract Map Visualization */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-white rounded-3xl shadow-xl border border-brand-100 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/pharma/assets/images/696f65db8cb34.png')] bg-center bg-no-repeat bg-[length:50%]" style={{ filter: "grayscale(100%)" }} />
          
          {/* Animated Location Pins */}
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (idx * 0.2), type: "spring" }}
              className="absolute flex flex-col items-center group cursor-pointer"
              style={{ top: loc.top, left: loc.left }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-500 rounded-full animate-ping opacity-75" />
                <div className="relative bg-accent-500 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-900 text-white text-sm font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl pointer-events-none z-20">
                {loc.name}
              </div>
            </motion.div>
          ))}
          
          <div className="absolute bottom-6 right-6 text-brand-400 font-medium text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" /> Active Operations
          </div>
        </div>
      </div>
    </section>
  );
}
