"use client";
import { motion } from "framer-motion";
import { Stethoscope, Workflow, BadgeCheck, Lightbulb } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function HealthcareToolPage() {
  const tools = [
    {
      title: "Digital Reference Platforms",
      icon: Lightbulb,
      description: "Real-time insights and evidence-based recommendations."
    },
    {
      title: "Treatment Guides",
      icon: Stethoscope,
      description: "Actionable protocols designed by medical experts."
    },
    {
      title: "Clinical Decision Aids",
      icon: Workflow,
      description: "Streamlining workflows and enhancing clinical confidence."
    },
    {
      title: "Validated & Secure",
      icon: BadgeCheck,
      description: "Scientifically validated tools ensuring data integrity and safety."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Healthcare Professional Tools"
        paths={[{ name: "Patient & Healthcare", href: "/" }, { name: "HCP Tools" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
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
                <Stethoscope className="w-4 h-4 text-brand-700" />
                <span className="text-sm font-bold text-brand-900 uppercase tracking-widest">Clinical Empowerment</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Tools for Informed, Patient-Centered Care
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Plexus Group of Companies, we empower healthcare professionals with scientifically validated tools and resources that support informed, patient-centered care. 
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                By combining innovation, usability, and clinical rigor, our tools strengthen engagement, improve patient outcomes, and enable healthcare professionals to make decisions with accuracy and confidence.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image 
                src="/assets/images/resources/tool.jpg"
                alt="Healthcare Tools"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((item, idx) => (
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
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
