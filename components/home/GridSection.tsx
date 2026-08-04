"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GridItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface GridSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  items: GridItem[];
  columns?: 3 | 4;
}

export default function GridSection({
  title,
  subtitle,
  description,
  items,
  columns = 3,
}: GridSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemAnim: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="section-padding bg-slate-50 border-y border-slate-200/60">
      <div className="container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold tracking-wider uppercase mb-6 border border-brand-100">
            {subtitle}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-tight mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              {description}
            </p>
          )}
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8`}
        >
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemAnim}
              className="glass-card p-10 rounded-[2rem] hover-lift group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-150 transform origin-top-right">
                <item.icon className="w-48 h-48 text-brand-900" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-8 relative z-10 border border-brand-100 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-500">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4 relative z-10">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10 flex-grow font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
