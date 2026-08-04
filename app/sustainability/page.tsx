"use client";
import { motion } from "framer-motion";
import { Leaf, Recycle, Factory, Activity } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";

export default function SustainabilityPage() {
  const initiatives = [
    {
      title: "Resource Efficiency",
      icon: Factory,
      description: "We pursue resource-efficient manufacturing, waste minimization, and energy optimization, ensuring sustainability without compromising product quality."
    },
    {
      title: "Environmental Management",
      icon: Leaf,
      description: "Our environmental responsibility is supported by risk-based management systems, continuous monitoring, and improvement initiatives."
    },
    {
      title: "Sustainable Supply Chain",
      icon: Recycle,
      description: "Sustainability considerations are integrated into process design, technology selection, and supply chain operations worldwide."
    },
    {
      title: "Global ESG Alignment",
      icon: Activity,
      description: "We align our practices with global ESG expectations, regulatory standards, and industry best practices, reinforcing accountability and transparency."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Sustainability & Environment"
        paths={[{ name: "CSR", href: "/" }, { name: "Sustainability" }]}
        bgImage="/assets/images/breadcrumb/breadcrumb-1.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6"
          >
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700 uppercase tracking-widest">Environmental Stewardship</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-8 leading-tight"
          >
            Responsible Operations for a <br/> Sustainable Future
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Environmental stewardship at Plexus Group of Companies is embedded within our operational and governance framework. By balancing innovation, compliance, and sustainability, we contribute to environmental protection while enabling responsible growth across global markets.
          </motion.p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white text-green-600 transition-colors duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action Banner */}
        <div className="w-full bg-brand-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Our Commitment to Society</h3>
            <p className="text-brand-200 text-lg mb-8 leading-relaxed">
              Beyond environmental sustainability, we are deeply committed to ethical standards and health community initiatives across the globe.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/health-community" className="px-8 py-3 bg-white text-brand-900 font-bold rounded-xl hover:bg-brand-50 transition-colors shadow-lg">
                Health Initiatives
              </a>
              <a href="/ethical-standard" className="px-8 py-3 bg-brand-800 text-white font-bold rounded-xl hover:bg-brand-700 border border-brand-700 transition-colors">
                Ethical Standards
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
