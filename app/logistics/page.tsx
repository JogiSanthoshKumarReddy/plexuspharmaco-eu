"use client";
import { motion } from "framer-motion";
import { Truck, Globe2, ShieldCheck, FileCheck, RefreshCw, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";

export default function LogisticsPage() {
  const capabilities = [
    {
      title: "Contract Manufacturing (CDMO)",
      icon: RefreshCw,
      description: "End-to-end manufacturing solutions ensuring continuity of global supply."
    },
    {
      title: "Regulatory Support",
      icon: ShieldCheck,
      description: "Robust compliance frameworks tailored to regional market access requirements."
    },
    {
      title: "Global Distribution",
      icon: Globe2,
      description: "Integrated logistics handling complex international supply chain demands."
    },
    {
      title: "Licensing & Partnerships",
      icon: FileCheck,
      description: "Strategic alliances driving worldwide pharmaceutical product availability."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Export & Logistics"
        paths={[{ name: "Global Markets", href: "/" }, { name: "Export & Logistics" }]}
        bgImage="/assets/images/ai/hero_slide_2.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm"
          >
            <Truck className="w-4 h-4 text-brand-700" />
            <span className="text-sm font-bold text-brand-900 uppercase tracking-widest">Supply Chain Excellence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Seamless Market Access
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Our dedicated export and logistics division ensures that high-quality healthcare solutions reach global markets securely, efficiently, and in full compliance with international trade and regulatory standards. We partner with world-class logistics providers to manage complex cold-chain and ambient distribution networks.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
