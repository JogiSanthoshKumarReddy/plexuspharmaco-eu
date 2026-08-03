"use client";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function QualityAssurancePage() {
  const metrics = [
    { label: "Regulatory Inspections Passed", value: "Multiple", icon: ShieldCheck },
    { label: "Enforcement Actions", value: "Zero", icon: AlertTriangle },
    { label: "Global Standard Compliance", value: "100%", icon: CheckCircle2 },
    { label: "Continuous Auditing", value: "24/7", icon: TrendingUp },
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Quality Assurance & Control"
        paths={[{ name: "Operations", href: "#" }, { name: "Quality Assurance" }]}
        bgImage="/assets/images/breadcrumb/breadcrumb-1.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-700" />
                <span className="text-sm font-bold text-brand-900 uppercase tracking-widest">Quality By Design</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Committed to Uncompromising Quality
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Plexus Group of Companies, quality and compliance are integral to who we are and how we operate. Our governance-driven quality culture ensures that every product and process meets the highest international standards.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Through advanced quality systems, continuous audits, and risk-based controls, we ensure product integrity, patient safety, and full operational transparency. Our consistent record of reliability and compliance underscores our unwavering commitment to delivering safe, effective, and high-quality healthcare solutions worldwide.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/regulatory-compliance" className="px-6 py-3 bg-brand-900 text-white rounded-xl font-medium hover:bg-brand-800 transition-colors">
                  View Regulatory Compliance
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-lg h-96"
            >
              <Image 
                src="/assets/images/resources/quality.png"
                alt="Quality Assurance Diagram"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="bg-brand-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-brand-200" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{metric.value}</h3>
                <p className="text-brand-200 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deep Dive Text */}
        <div className="max-w-4xl mx-auto mt-24 text-center">
          <h3 className="text-2xl font-bold text-brand-900 mb-6">A Track Record of Excellence</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Over the past five years, we have successfully completed multiple regulatory inspections with no warning letters or enforcement actions, reflecting the strength of our compliance framework. We operate under a robust, independently overseen quality and compliance program, aligned with EU regulations, U.S. FDA cGMP requirements, and global regulatory expectations.
          </p>
        </div>

      </div>
    </div>
  );
}
