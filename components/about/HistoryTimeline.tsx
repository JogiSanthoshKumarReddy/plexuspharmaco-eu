"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const milestones = [
  {
    year: "2018",
    title: "Foundation & Vision",
    description: "Plexuspharmaco was founded with a singular vision: to bridge the gap between complex pharmaceutical R&D and accessible patient care globally. Our first research facility opened in Frankfurt, Germany."
  },
  {
    year: "2020",
    title: "European Expansion",
    description: "Successfully expanded operations across Western Europe, establishing state-of-the-art manufacturing hubs in Spain and France to meet growing regional demands."
  },
  {
    year: "2022",
    title: "Breakthrough Innovation",
    description: "Launched our flagship cardiovascular and neurological product lines, securing 5 major international patents and cementing our reputation as a leader in innovative formulations."
  },
  {
    year: "2024",
    title: "Global Footprint",
    description: "Achieved regulatory approvals in over 40 countries outside of the EU. Opened new regional headquarters in Asia-Pacific and Latin America to support global distribution networks."
  },
  {
    year: "2026",
    title: "Sustainable Future",
    description: "Committed to 100% carbon-neutral manufacturing by 2030. Unveiled our new biologicals and personalized medicine divisions, pioneering the next generation of healthcare solutions."
  }
];

export default function HistoryTimeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-bold tracking-wide uppercase mb-4"
          >
            <Calendar className="w-4 h-4" />
            Our Legacy
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6"
          >
            A Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">Innovation & Care</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            From a humble research facility to a global pharmaceutical powerhouse, our history is defined by scientific breakthroughs and an unwavering commitment to patients.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 md:-translate-x-1/2 rounded-full" />
          
          <div className="space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 top-0 md:top-6 w-10 h-10 bg-white border-4 border-brand-500 rounded-full -translate-x-[18px] md:-translate-x-1/2 shadow-lg shadow-brand-500/20 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-brand-500 rounded-full" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-brand-200 transition-all group">
                      <div className={`inline-flex items-center justify-center px-4 py-1.5 bg-brand-50 text-brand-700 font-black rounded-lg text-xl mb-4 ${isEven ? 'md:ml-auto' : ''}`}>
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold text-brand-900 mb-3 group-hover:text-brand-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
