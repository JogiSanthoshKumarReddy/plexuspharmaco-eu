"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CompanyOverview() {
  const points = [
    "Delivering high-quality, evidence-based healthcare solutions.",
    "Operating to the highest standards of scientific rigor.",
    "Unwavering commitment to quality assurance and regulatory compliance.",
    "Partnering globally to bring trusted pharmaceuticals to diverse markets."
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Collage Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <Image 
                src="/assets/images/ai/modern_pharma_lab.png"
                alt="Plexuspharmaco European Operations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:flex flex-col items-center justify-center w-48 h-48"
            >
              <div className="text-5xl font-bold text-accent-500 mb-2">15+</div>
              <div className="text-brand-900 font-semibold text-center leading-tight">Years of<br/>Excellence</div>
            </motion.div>
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">About Us</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Advancing Global Health Through Innovation
              </h2>
              
              <p className="text-lg text-brand-600 mb-8 leading-relaxed">
                Plexuspharmaco GmbH is a Germany-based pharmaceutical organization committed to delivering high-quality, evidence-based, and accessible healthcare solutions worldwide. 
                <br/><br/>
                Operating to the highest standards of scientific rigor, quality assurance, and regulatory compliance, we partner globally to bring trusted pharmaceuticals, nutraceuticals, liposomal formulations, medical devices, and dermo-cosmetic products to diverse markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-800 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <a href="/business-enquiry" className="inline-flex items-center justify-center px-8 py-4 bg-brand-900 text-white font-medium rounded-xl hover:bg-brand-800 hover:shadow-lg transition-all duration-300">
                Partner With Us Today
              </a>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
