"use client";


import { motion } from "framer-motion";
import { Microscope, Activity, Link as LinkIcon, ShieldCheck, TestTube, Network, FlaskConical, Stethoscope, BriefcaseMedical } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function ResearchPage() {
  const highlights = [
    {
      title: "Translational Science",
      icon: Microscope,
      description: "Data integrity and rigorous scientific methodology driving innovations from the lab directly to patient care."
    },
    {
      title: "Quality by Design (QbD)",
      icon: Activity,
      description: "Integrating risk-based models and real-time monitoring to ensure robust and reproducible outcomes."
    },
    {
      title: "Global Collaboration",
      icon: LinkIcon,
      description: "Working closely with academic institutions and contract research organizations to accelerate timelines."
    }
  ];

  const competencies = [
    {
      title: "Formulation Development",
      icon: FlaskConical,
      description: "Developing complex generics, sustained-release, and novel drug delivery systems across solid oral, liquid, and sterile injectable forms."
    },
    {
      title: "Analytical Development",
      icon: TestTube,
      description: "State-of-the-art analytical labs for method development, validation, stability testing, and degradation profiling."
    },
    {
      title: "Technology Transfer",
      icon: Network,
      description: "Seamless scale-up from lab scale to commercial manufacturing, ensuring absolute process equivalency and regulatory compliance."
    },
    {
      title: "Clinical Support",
      icon: Stethoscope,
      description: "End-to-end bioequivalence (BE) and clinical trial support, including dossier compilation and clinical monitoring."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Research & Development"
        paths={[{ name: "Innovation", href: "/" }, { name: "R&D" }]}
        bgImage="/assets/images/ai/modern_pharma_lab.png"
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
                <span className="text-sm font-bold text-brand-900 uppercase tracking-widest">Science-Led Innovation</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Innovation with Purpose
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Plexuspharmaco, innovation begins with a disciplined, science-driven research and development framework embedded across formulation design, process development, and commercialization.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our R&D approach is guided by data integrity, translational science, and regulatory foresight, ensuring that every development delivers measurable value to patients, partners, and healthcare systems.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We leverage advanced formulation science and process engineering to develop robust, scalable, and compliant healthcare solutions across pharmaceuticals, nutraceuticals, liposomal delivery systems, medical devices, and dermo-cosmetics.
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
                src="/assets/images/ai/hero_slide_3.png"
                alt="Pharma R&D Labs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 mb-6">Core R&D Competencies</h2>
            <p className="text-lg text-slate-600">Our multidisciplinary research teams are equipped with industry-leading infrastructure to tackle the most complex pharmaceutical development challenges.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competencies.map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-900 flex-shrink-0 flex items-center justify-center text-white shadow-md">
                  <comp.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-900 mb-3">{comp.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{comp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Pipeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-900 rounded-[3rem] p-12 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
            <Image src="/assets/images/ai/modern_pharma_lab.png" alt="Lab Texture" fill className="object-cover" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <BriefcaseMedical className="w-16 h-16 text-brand-200 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Robust Research Pipeline</h2>
            <p className="text-lg text-brand-100 font-light leading-relaxed mb-10">
              Plexuspharmaco is aggressively expanding its therapeutic footprint. We currently have over 45 active R&D projects in various stages of development, focusing heavily on oncology, cardiovascular, and advanced nutraceutical formulations.
            </p>
            <a href="/pipeline" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Our Pipeline
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
