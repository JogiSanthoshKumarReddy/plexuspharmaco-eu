
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Merge, Map, BarChart3 } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";

export default function JointVenturePage() {
  const pillars = [
    {
      title: "Shared Investment & Governance",
      icon: Merge,
      description: "Our joint ventures are built on shared investment, unified governance, and rigorous performance metrics to ensure mutual success."
    },
    {
      title: "Local Market Expertise",
      icon: Map,
      description: "By pooling technological assets and leveraging deep local market knowledge, we create resilient, localized supply chains."
    },
    {
      title: "Accelerated Scale",
      icon: BarChart3,
      description: "We actively seek joint venture opportunities that accelerate market entry and scale manufacturing capabilities in target regions."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Joint Ventures"
        paths={[{ name: "Partnering", href: "/partnership" }, { name: "Joint Venture" }]}
        bgImage="/assets/images/pharma_hero_mfg.png"
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
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Building Synergistic Joint Ventures
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Plexus Pharmaco, joint ventures represent highly integrated, synergistic collaborations that combine complementary strengths, resources, and expertise. We actively seek joint venture opportunities that accelerate market entry, scale manufacturing capabilities, and foster local innovation in target regions.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our joint ventures are built on shared investment, unified governance, and rigorous performance metrics. By pooling technological assets and leveraging deep local market knowledge, we create resilient, localized supply chains and drive significant mutual growth.
              </p>

              <Link href="/business-enquiry" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-xl font-medium hover:bg-brand-800 transition-colors">
                Propose a Joint Venture <ArrowRight className="w-4 h-4" />
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
                src="/assets/images/resources/strategy.jpg"
                alt="Joint Venture Collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
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
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-brand-700 flex items-center justify-center mb-6">
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
