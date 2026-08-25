
"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Search, CheckCircle2, Shield, AlertTriangle, Fingerprint, RefreshCcw, Activity } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function QualityAssurancePage() {
  const qcPillars = [
    {
      title: "Quality Policy",
      icon: Shield,
      description: "Our uncompromising commitment to 'Quality by Design' (QbD) ensures that safety, efficacy, and purity are built into every product from the ground up."
    },
    {
      title: "Quality Control (QC)",
      icon: Search,
      description: "Advanced analytical testing laboratories equipped with HPLC, GC, LC-MS/MS for rigorous raw material, in-process, and finished product testing."
    },
    {
      title: "Validation & Calibration",
      icon: CheckCircle2,
      description: "Continuous validation of manufacturing equipment, analytical methods, and cleanroom environments to guarantee reproducible outcomes."
    },
    {
      title: "Risk Management",
      icon: AlertTriangle,
      description: "Proactive FMEA and HACCP protocols to identify, mitigate, and eliminate potential quality risks before they manifest."
    },
    {
      title: "Data Integrity & Traceability",
      icon: Fingerprint,
      description: "Fully compliant 21 CFR Part 11 digital systems ensuring ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate)."
    },
    {
      title: "CAPA Systems",
      icon: RefreshCcw,
      description: "Robust Corrective and Preventive Action mechanisms driving a culture of continuous improvement across all operational tiers."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Quality Assurance"
        paths={[{ name: "Operations", href: "/" }, { name: "Quality Assurance" }]}
        bgImage="/assets/images/pharma_quality_control.png"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/10 border border-brand-900/20 mb-6 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-900" />
                <span className="text-sm font-bold text-brand-900 uppercase tracking-widest">Zero Defect Policy</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Quality is Engineered, Not Just Checked
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Plexus Pharmaco, Quality Assurance is not a department—it is the foundational culture that governs every decision we make. We believe that every dose manufactured in our facilities represents a promise of health to a patient.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our global Quality Management System (QMS) ensures harmonized compliance across all manufacturing nodes, aligning seamlessly with US FDA, MHRA, EMA, and WHO guidelines.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image 
                src="/assets/images/pharma_quality_control.png"
                alt="Quality Assurance Lab"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Six Pillars of Quality */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 mb-6">The Six Pillars of Our QMS</h2>
            <p className="text-lg text-slate-600">A comprehensive, closed-loop approach that operates under rigorous quality systems to support product safety from active pharmaceutical ingredient (API) sourcing to post-market surveillance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qcPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continuous Monitoring Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-900 rounded-[3rem] p-12 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
            <Image src="/assets/images/pharma_hero_mfg.png" alt="Lab Texture" fill className="object-cover" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Activity className="w-16 h-16 text-brand-200 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Post-Market Surveillance & Pharmacovigilance</h2>
            <p className="text-lg text-brand-100 font-light leading-relaxed">
              Our responsibility does not end when the product leaves our facility. We maintain a robust global pharmacovigilance network to monitor the safety and efficacy of our medicines in real-world clinical settings, ensuring supports patient safety.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
