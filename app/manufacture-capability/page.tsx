"use client";
import { motion } from "framer-motion";
import { Settings, Shield, Zap, SearchCheck, Factory, Box, ThermometerSnowflake, Truck, PackageCheck, Layers } from "lucide-react";
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
      description: "All operations are conducted in full compliance with EU regulatory requirements, WHO GMP standards, and globally accepted quality guidelines."
    },
    {
      title: "Risk-Based Management",
      icon: SearchCheck,
      description: "Our manufacturing model emphasizes operational efficiency, traceability, and risk-based quality management, supported by continuous monitoring."
    }
  ];

  const facilities = [
    {
      title: "Sterile Production Lines",
      icon: Factory,
      description: "Closed-loop isolator technology for the production of sterile injectables, lyophilized vials, and pre-filled syringes with zero manual intervention."
    },
    {
      title: "Solid Oral Dosage",
      icon: Layers,
      description: "High-capacity continuous manufacturing suites for tablets and capsules, equipped with automated granulation and fluid-bed drying."
    },
    {
      title: "Automated Packaging",
      icon: PackageCheck,
      description: "High-speed blister packing, bottle filling, and serialization (Track & Trace) systems to combat counterfeiting and ensure patient safety."
    },
    {
      title: "Cold Chain Logistics",
      icon: ThermometerSnowflake,
      description: "Temperature-controlled warehousing (2°C to 8°C and below -20°C) for vaccines, biologics, and temperature-sensitive APIs."
    },
    {
      title: "Global Warehousing",
      icon: Box,
      description: "Automated Storage and Retrieval Systems (ASRS) managing thousands of pallets with precise FIFO inventory control."
    },
    {
      title: "Resilient Supply Chain",
      icon: Truck,
      description: "Digitally integrated supply chain network ensuring on-time delivery across 50+ countries despite global disruptions."
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
        bgImage="/assets/images/pharma_hero_lab.png"
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
                src="/assets/images/pharma_hero_mfg.png"
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
                src="/assets/images/pharma_quality_control.png"
                alt="Quality Inspection"
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
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Plexuspharmaco operates advanced manufacturing capabilities designed to meet the most stringent global pharmaceutical and healthcare standards. Our footprint spans multiple continents, producing billions of doses annually.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                With a strong focus on precision, reliability, and compliance, we deliver high-quality products that meet evolving global market and patient needs. We embrace Industry 4.0, integrating IoT, automation, and continuous manufacturing protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <cap.icon className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900">{cap.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{cap.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Facility & Capacity Overview */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 mb-6">Unrivaled Production Capacity</h2>
            <p className="text-lg text-slate-600">Our facilities are engineered for maximum throughput without compromising on our zero-defect quality mandate. From raw API synthesis to final sterile packaging, we control the entire value chain.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                  <facility.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-900 mb-3">{facility.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stat Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-900 rounded-[3rem] p-12 lg:p-16 text-white flex flex-col md:flex-row justify-around items-center text-center shadow-2xl relative overflow-hidden mb-24"
        >
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
            <Image src="/assets/images/pharma_hero_lab.png" alt="Lab Texture" fill className="object-cover" />
          </div>
          
          <div className="relative z-10 p-6">
            <div className="text-5xl lg:text-6xl font-bold mb-2">12+</div>
            <div className="text-brand-200 uppercase tracking-widest text-sm font-bold">Global Facilities</div>
          </div>
          <div className="relative z-10 p-6 border-y md:border-y-0 md:border-x border-white/10">
            <div className="text-5xl lg:text-6xl font-bold mb-2">5B+</div>
            <div className="text-brand-200 uppercase tracking-widest text-sm font-bold">Doses Annually</div>
          </div>
          <div className="relative z-10 p-6">
            <div className="text-5xl lg:text-6xl font-bold mb-2">50+</div>
            <div className="text-brand-200 uppercase tracking-widest text-sm font-bold">Export Markets</div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <div className="bg-white rounded-3xl p-12 border border-slate-100 shadow-sm text-center">
          <h3 className="text-2xl font-bold text-brand-900 mb-10">Global Regulatory Approvals & Certifications</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {certifications.map((cert) => (
              <div key={cert.id} className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer">
                <Image 
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
