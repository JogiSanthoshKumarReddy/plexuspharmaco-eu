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
    <section className="py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Abstract Glowing Backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* High-tech grid overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 leading-relaxed font-light"
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
              className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] transition-all duration-500 border border-white/10 group overflow-hidden flex flex-col hover:-translate-y-2 relative"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-[40px] group-hover:bg-brand-400/30 transition-colors duration-500 pointer-events-none" />

              <div className="relative h-64 w-full overflow-hidden rounded-t-3xl border-b border-white/10">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg group-hover:-translate-y-2 group-hover:bg-brand-500 transition-all duration-300 z-10">
                  {iconMap[feature.icon]}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-accent-400 transition-colors">{feature.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed flex-grow">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
