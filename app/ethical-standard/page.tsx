"use client";
import { motion } from "framer-motion";
import { Scale, Users, Shield, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Link from "next/link";

export default function EthicalStandardPage() {
  const standards = [
    {
      title: "Regulatory Compliance",
      icon: Scale,
      description: "Adherence to international ethical business practices, data integrity principles, and global safety requirements."
    },
    {
      title: "Evidence-Based Decisions",
      icon: Shield,
      description: "Responsible innovation enforced through robust governance and compliance frameworks."
    },
    {
      title: "Transparent Engagement",
      icon: Users,
      description: "Our engagement with partners and healthcare professionals is governed by clear conflict-of-interest policies."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Ethical Standards"
        paths={[{ name: "CSR", href: "/" }, { name: "Ethical Standards" }]}
        bgImage="/assets/images/breadcrumb/event-bg.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Integrity, Compliance, and Responsible Governance
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed mb-6"
          >
            Ethical conduct is a foundational pillar of Corporate Social Responsibility at Plexus Group of Companies. Our ethical standards are rooted in scientific integrity, regulatory compliance, transparency, and accountability, guiding every aspect of our operations and decision-making.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Through strong ethical governance and transparent reporting, Plexus builds trust with stakeholders and reinforces its commitment to responsible, compliant, and sustainable healthcare advancement.
          </motion.p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {standards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/compilance-reporting" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl">
            View Compliance & Reporting <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
