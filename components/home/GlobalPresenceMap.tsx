"use client";

import { motion } from "framer-motion";
import { Building2, Factory, FlaskConical, Truck, Globe2, MapPin } from "lucide-react";

export default function GlobalPresenceMap() {
  const locations = [
    { title: "European HQ", country: "United Kingdom", icon: Building2, desc: "Global strategy and corporate governance." },
    { title: "Manufacturing Hub", country: "Germany", icon: Factory, desc: "State-of-the-art production facilities." },
    { title: "R&D Center", country: "France", icon: FlaskConical, desc: "Advanced research and innovation lab." },
    { title: "Distribution", country: "USA", icon: Truck, desc: "North American supply chain logistics." },
    { title: "Asia Pacific", country: "Singapore", icon: Globe2, desc: "APAC regional operations and support." },
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
            <Globe2 className="w-4 h-4" /> Global Reach
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

        {/* Clean Grid Visualization instead of an abstract map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-brand-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-700 group-hover:text-white transition-all duration-300">
                  <loc.icon className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-accent-500 bg-accent-50 px-3 py-1 rounded-full">
                  <MapPin className="w-3.5 h-3.5" />
                  {loc.country}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{loc.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {loc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
