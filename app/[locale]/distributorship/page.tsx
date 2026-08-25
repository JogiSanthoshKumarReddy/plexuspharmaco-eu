
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Plane, FileCheck, Users } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";

export default function DistributorshipPage() {
  const highlights = [
    {
      title: "Regulatory Reliability",
      icon: FileCheck,
      description: "Partner selection follows a structured evaluation process that considers local regulatory capability and quality infrastructure."
    },
    {
      title: "Supply Chain Continuity",
      icon: Plane,
      description: "We align with partners who can uphold global quality standards while effectively navigating regional commercial environments."
    },
    {
      title: "Harmonized Controls",
      icon: Users,
      description: "We support distributors through aligned Quality Management Systems and standardized regulatory documentation."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Distributorship & Agency"
        paths={[{ name: "Partnering", href: "/partnership" }, { name: "Distributorship" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Structured Market Access Through Trusted Partners
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Plexuspharmaco engages with distributors and agents as long-term market access partners, enabling efficient, compliant, and sustainable commercialization of healthcare products across diverse geographies. 
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our distributorship and agency models are designed to ensure regulatory reliability, supply chain continuity, and consistent product performance in each market.
              </p>

              <Link href="/business-enquiry" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-xl font-medium hover:bg-brand-800 transition-colors">
                Become a Distributor <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image 
                src="/assets/images/resources/distribute.jpg"
                alt="Pharma Distributorship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
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

      </div>
    </div>
  );
}
