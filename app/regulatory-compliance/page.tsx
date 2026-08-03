"use client";
import { motion } from "framer-motion";
import { Globe, FileCheck, SearchCheck, CheckCircle2 } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function RegulatoryCompliancePage() {
  const pillars = [
    {
      title: "Global Approvals",
      icon: Globe,
      description: "Our regulatory systems are designed to support product development, manufacturing, and commercialization across multiple jurisdictions, ensuring timely approvals."
    },
    {
      title: "Audit Readiness",
      icon: SearchCheck,
      description: "We maintain robust documentation, audit readiness, and continuous monitoring, supported by experienced regulatory professionals."
    },
    {
      title: "Proactive Risk Management",
      icon: FileCheck,
      description: "Through proactive risk management and transparent regulatory engagement, we safeguard patient safety, product integrity, and market confidence."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Regulatory Compliance"
        paths={[{ name: "Operations", href: "#" }, { name: "Regulatory Compliance" }]}
        bgImage="/assets/images/breadcrumb/breadcrumb-1.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 mb-6 shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-brand-700" />
            <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Global Standards</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-8 leading-tight"
          >
            Committed to Global <br/> Regulatory Excellence
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-600 leading-relaxed"
          >
            At Plexus Group of Companies, regulatory compliance is a cornerstone of our global operations and long-term credibility. We operate within a structured, governance-driven framework that ensures full adherence to EU regulations, U.S. FDA requirements, and internationally recognized regulatory standards.
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-24 border border-brand-100"
        >
          <Image 
            src="/assets/images/resources/compliance.jpg"
            alt="Regulatory Compliance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
