"use client";
import { motion } from "framer-motion";
import { LineChart, BarChart3, TrendingUp, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import CompanyStats from "@/components/home/CompanyStats";
import Image from "next/image";
import Link from "next/link";

export default function InvestorRelationPage() {
  const pillars = [
    {
      title: "Transparent Communication",
      icon: TrendingUp,
      description: "Timely disclosures and data-driven insights that highlight our operational performance and long-term value creation."
    },
    {
      title: "Disciplined Strategy",
      icon: LineChart,
      description: "A combination of strong governance, disciplined risk management, and evidence-based business strategy."
    },
    {
      title: "Sustainable Growth",
      icon: BarChart3,
      description: "Empowering investors to engage meaningfully with our vision for science-driven healthcare innovation and global expansion."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Investor Relations"
        paths={[{ name: "Investors", href: "/" }, { name: "Investor Relations" }]}
        bgImage="/assets/images/ai/corporate_governance.png"
      />

      <CompanyStats />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 relative h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-brand-100"
            >
              <Image 
                src="/assets/images/resources/investor.jpg"
                alt="Investor Relations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-brand-900 mb-6 leading-tight">
                Partners in Innovation and Growth
              </h2>
              
              <p className="text-lg text-brand-600 mb-6 leading-relaxed">
                At Plexus Group of Companies, we view our investors as strategic partners in our journey of innovation, growth, and global impact. We are committed to transparent communication, timely disclosures, and data-driven insights.
              </p>
              
              <p className="text-lg text-brand-600 leading-relaxed mb-8">
                By fostering a culture of accountability, collaboration, and forward-looking performance, we empower investors to engage meaningfully with our vision for science-driven healthcare innovation and global market expansion.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/financial-report" className="px-6 py-3 bg-brand-900 text-white rounded-xl font-medium hover:bg-brand-800 transition-colors flex items-center gap-2">
                  View Financial Reports <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/corporate-governance" className="px-6 py-3 bg-white text-brand-900 border border-brand-200 rounded-xl font-medium hover:bg-brand-50 transition-colors">
                  Corporate Governance
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card hover-lift p-8 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6">
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
