"use client";
import { motion } from "framer-motion";
import { Settings, Shield, Zap, SearchCheck } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function ManufactureCapabilityPage() {
  const capabilities = [
    {
      title: "Advanced Infrastructure",
      icon: Settings,
      description: "State-of-the-art infrastructure, validated processes, and digital quality systems to ensure consistent product excellence."
    },
    {
      title: "Scalable Platforms",
      icon: Zap,
      description: "We support a wide range of dosage forms, integrating flexible, scalable manufacturing platforms with stringent process controls."
    },
    {
      title: "Global Compliance",
      icon: Shield,
      description: "All operations are conducted in full compliance with EU regulatory requirements, U.S. FDA cGMP standards, and globally accepted quality guidelines."
    },
    {
      title: "Risk-Based Management",
      icon: SearchCheck,
      description: "Our manufacturing model emphasizes operational efficiency, traceability, and risk-based quality management, supported by continuous monitoring."
    }
  ];

  const certifications = [
    { id: 1, src: "/assets/images/c1.png", alt: "Certification 1" },
    { id: 2, src: "/assets/images/c2.png", alt: "Certification 2" },
    { id: 3, src: "/assets/images/c3.png", alt: "Certification 3" },
    { id: 4, src: "/assets/images/c4.png", alt: "Certification 4" },
    { id: 5, src: "/assets/images/c5.png", alt: "Certification 5" },
    { id: 6, src: "/assets/images/c6.png", alt: "Certification 6" }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Manufacturing Capabilities"
        paths={[{ name: "Operations", href: "/" }, { name: "Manufacturing" }]}
        bgImage="/assets/images/ai/hero_slide_2.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute inset-4 rounded-3xl overflow-hidden shadow-2xl z-10 border border-brand-100"
            >
              <Image 
                src="/assets/images/about/about1.jpg"
                alt="EU-GMP Manufacturing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-8 -right-8 w-64 h-64 rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white"
            >
              <Image 
                src="/assets/images/about/about2.jpg"
                alt="MHRA Compliant"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Manufacturing Excellence Aligned with Global Standards
              </h2>
              
              <p className="text-lg text-brand-600 mb-6 leading-relaxed">
                Plexus Group of Companies operates advanced manufacturing capabilities designed to meet the most stringent global pharmaceutical and healthcare standards. 
              </p>
              
              <p className="text-lg text-brand-600 leading-relaxed mb-8">
                With a strong focus on precision, reliability, and compliance, we deliver high-quality products that meet evolving global market and patient needs.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/quality-assurance" className="px-6 py-3 bg-brand-900 text-white rounded-xl font-medium hover:bg-brand-800 transition-colors">
                  Quality Assurance
                </a>
                <a href="/contract-manufacturing" className="px-6 py-3 bg-white text-brand-900 border border-brand-200 rounded-xl font-medium hover:bg-brand-50 transition-colors">
                  Contract Manufacturing
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-700 flex-shrink-0 flex items-center justify-center">
                <item.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Strip */}
        <div className="bg-white rounded-3xl p-12 border border-slate-100 shadow-sm text-center">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
            GMP Approvals and Global Certifications
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {certifications.map((cert) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: cert.id * 0.1 }}
                className="relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image 
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
