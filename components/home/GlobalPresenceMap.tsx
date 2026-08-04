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
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Abstract Glowing Globe Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[80px] pointer-events-none" />
      
      {/* High-tech grid overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 border border-white/10 text-accent-400 rounded-full text-sm font-bold uppercase tracking-widest backdrop-blur-md"
          >
            <Globe2 className="w-4 h-4" /> Global Reach
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Delivering Healthcare Worldwide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 leading-relaxed font-light"
          >
            Our strategically located operational hubs ensure rapid distribution and compliance with international regulatory standards.
          </motion.p>
        </div>

        {/* Ultra-Premium Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className="relative group rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-[40px] group-hover:bg-brand-400/30 transition-colors duration-500" />
              
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500 group-hover:border-brand-400 transition-all duration-500 shadow-lg">
                  <loc.icon className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-accent-400 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  <MapPin className="w-3.5 h-3.5" />
                  {loc.country}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 tracking-wide group-hover:text-accent-400 transition-colors">{loc.title}</h3>
              <p className="text-slate-400 leading-relaxed relative z-10 font-light">
                {loc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
