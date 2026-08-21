"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/common/AnimatedCounter";

const stats = [
  { label: "Global Partners", value: 15, suffix: "+" },
  { label: "Years Combined Experience", value: 50, suffix: "+" },
  { label: "Therapeutic Categories", value: 12, suffix: "" },
  { label: "Research Scientists", value: 25, suffix: "+" },
];

export default function CompanyStats() {
  return (
    <section className="py-16 bg-slate-950 text-white relative overflow-hidden border-t border-white/5">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-600/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      {/* High-tech grid overlay */}
      <div className="absolute inset-0 bg-[url('/assets/images/noise.svg')] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`flex flex-col items-center justify-center text-center ${idx === 0 ? "" : "pl-8 md:pl-12"}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-brand-300 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base font-medium text-brand-200 tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
