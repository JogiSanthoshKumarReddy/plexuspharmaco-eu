"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Route, Snowflake } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";

export default function BiogenixPage() {
  const capabilities = [
    {
      title: "Cold-Chain Logistics",
      icon: Snowflake,
      description: "Temperature-controlled and hazardous-material storage ensuring uncompromised product integrity."
    },
    {
      title: "End-to-End Solutions",
      icon: Route,
      description: "Seamless supply chain management from initial active ingredient sourcing to final distribution."
    },
    {
      title: "Omnichannel Delivery",
      icon: Truck,
      description: "First-mile and last-mile delivery structured for institutional, B2B, B2C, and D2C channels."
    },
    {
      title: "Regulatory Compliance",
      icon: ShieldCheck,
      description: "Full adherence to US FDA, EU EMA, WHO-GMP, and applicable national standards."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Plexus Biogenix LLP"
        paths={[{ name: "Subsidiaries", href: "/" }, { name: "Plexus Biogenix" }]}
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
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Healthcare Enterprise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Delivering End-to-End Solutions
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-6"
          >
            Plexus Biogenix LLP, under the Plexuspharmaco Group, is a globally aligned healthcare enterprise delivering end-to-end pharmaceutical, nutraceutical, and life-sciences solutions.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            The company integrates research, manufacturing, regulatory excellence, supply chain management, and commercial execution to serve regulated and emerging markets worldwide.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-brand-900 mb-12">Manufacturing & Supply Chain Excellence</h3>
          
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
