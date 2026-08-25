
"use client";
import { motion } from "framer-motion";
import { Stethoscope, Activity, Dna, Factory, CheckCircle2 } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";

export default function BiocarePage() {
  const capabilities = [
    {
      title: "Finished Dosage Forms (FDFs)",
      icon: Activity,
      description: "Manufacturing of tablets, capsules, injectables, liquids, ointments, and topical formulations."
    },
    {
      title: "Biopharmaceuticals",
      icon: Dna,
      description: "Development and supply of biosimilars, cell-based therapies, and targeted delivery mechanisms."
    },
    {
      title: "Active Pharmaceutical Ingredients",
      icon: Factory,
      description: "Robust manufacturing of APIs and intermediates ensuring high purity and supply security."
    },
    {
      title: "Nutraceuticals & Dietaries",
      icon: Stethoscope,
      description: "Formulation of dietary supplements and herbal formulations for preventive healthcare."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Plexus Biocare Pvt. Ltd."
        paths={[{ name: "Subsidiaries", href: "/" }, { name: "Plexus Biocare" }]}
        bgImage="/assets/images/pharma_hero_mfg.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900 text-white mb-6 shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Global Healthcare Enterprise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Long-Term Partner for Global Innovation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-6"
          >
            Plexus Pharmaco Group is a globally aligned healthcare and life-sciences enterprise operating under Plexus Biocare Pvt. Ltd., focused on the development, manufacturing, regulation, and international commercialization of pharmaceutical and healthcare products. 
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            With a strong foundation in quality, compliance, and governance, Plexus Pharmaco is positioned as a long-term partner of choice for innovators, manufacturers, institutions, and global distributors.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-brand-900 mb-12">Manufacturing & Processing Capabilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-start gap-6"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
