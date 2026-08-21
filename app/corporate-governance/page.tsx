
"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileText, CheckCircle2 } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function CorporateGovernancePage() {
  const pillars = [
    {
      title: "Transparency & Accountability",
      icon: ShieldCheck,
      description: "We follow international best practices, combining regulatory compliance, ethical conduct, and effective risk management across all operations."
    },
    {
      title: "Strategic Oversight",
      icon: Scale,
      description: "Our leadership and Board of Directors provide strategic oversight, with clear roles and responsibilities across subsidiaries to ensure alignment with the company’s vision."
    },
    {
      title: "Scientific Integrity",
      icon: FileText,
      description: "Guided by scientific integrity, ethical decision-making, and global standards, we maintain operational excellence and investor confidence."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Corporate Governance"
        paths={[{ name: "Company", href: "/" }, { name: "Corporate Governance" }]}
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
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
                <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Our Principles</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Governance built on integrity and global standards
              </h2>
              
              <p className="text-lg text-brand-600 mb-8 leading-relaxed">
                At Plexuspharmaco GmbH, strong corporate governance underpins everything we do, ensuring transparency, accountability, and sustainable value creation. 
                <br/><br/>
                This disciplined approach enables Plexuspharmaco to foster innovation, collaboration, and sustainable growth across pharmaceuticals, nutraceuticals, healthcare solutions, and advanced technology platforms worldwide.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute inset-4 rounded-3xl overflow-hidden shadow-2xl z-10 border border-brand-100 group"
            >
              <Image 
                src="/assets/images/pharma_hero_corporate.png"
                alt="Corporate Governance Board"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-8 -left-8 w-64 h-64 rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white group"
            >
              <Image 
                src="/assets/images/pharma_hero_lab.png"
                alt="Scientific Leadership"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          </div>
          
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300">
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
