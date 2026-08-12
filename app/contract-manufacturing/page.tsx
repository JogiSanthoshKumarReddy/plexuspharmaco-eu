"use client";
import { motion } from "framer-motion";
import { Factory, ArrowRight, Cog, CheckCircle2, PackageSearch } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";

export default function ContractManufacturingPage() {
  const offerings = [
    {
      title: "Contract Manufacturing (CMO)",
      icon: Factory,
      description: "End-to-end manufacturing solutions tailored to the evolving needs of global pharmaceutical partners."
    },
    {
      title: "CDMO Services",
      icon: Cog,
      description: "Integrated capabilities encompassing formulation support, technology transfer, manufacturing, and regulatory readiness."
    },
    {
      title: "White Labelling",
      icon: PackageSearch,
      description: "Rapid market entry solutions while maintaining full compliance, confidentiality, and brand integrity."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Contract Manufacturing"
        paths={[{ name: "Partnering", href: "/partnership" }, { name: "Contract Manufacturing" }]}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 mb-6 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-700" />
                <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Global Standards</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Manufacturing Partnerships Aligned with Global Standards
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Plexus Group of Companies provides end-to-end Contract Manufacturing (CMO), Contract Development and Manufacturing (CDMO), and White Labelling solutions tailored to the evolving needs of global pharmaceutical and healthcare partners.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our operating model is designed to support products from concept and development through commercialization and scale-up, ensuring speed, flexibility, and consistent quality.
              </p>

              <Link href="/business-enquiry" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-xl font-medium hover:bg-brand-800 transition-colors">
                Discuss CMO Services <ArrowRight className="w-4 h-4" />
              </Link>
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
                src="/assets/images/resources/contract.jpg"
                alt="Contract Manufacturing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {offerings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
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

        {/* Highlight Section */}
        <div className="bg-brand-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Reliability & Compliance</h3>
            <p className="text-brand-200 text-lg leading-relaxed">
              All activities are executed in strict compliance with EU regulatory requirements, U.S. FDA cGMP standards, and globally accepted quality frameworks. With a strong focus on operational excellence, regulatory discipline, and long-term partnership, Plexus Group serves as a reliable manufacturing ally for sustainable global growth.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
