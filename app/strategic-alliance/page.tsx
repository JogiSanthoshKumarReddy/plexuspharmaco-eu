"use client";
import { motion } from "framer-motion";
import { Workflow, Network, Database, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";

export default function StrategicAlliancePage() {
  const features = [
    {
      title: "Integrated Collaboration",
      icon: Network,
      description: "Deep, integrated collaborations that extend beyond transactional relationships, working closely with research institutions and healthcare companies."
    },
    {
      title: "Alliance Management",
      icon: Workflow,
      description: "We implement structured models including joint steering committees and transparent reporting frameworks for agility and optimization."
    },
    {
      title: "Seamless Integration",
      icon: Database,
      description: "Enabled through harmonized quality systems, validated technology transfer pathways, and data-driven compliance frameworks."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Strategic Alliances"
        paths={[{ name: "Partnering", href: "/partnership" }, { name: "Strategic Alliances" }]}
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
                Collaborative Ecosystems Driving Global Impact
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Strategic alliances at Plexus Group are designed as deep, integrated collaborations that extend beyond transactional relationships. We work closely with research institutions, technology partners, manufacturers, contract research organizations, and healthcare companies to co-create innovation and accelerate global healthcare impact.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                By aligning technology, compliance, and commercial strategy, Plexus transforms strategic alliances into sustainable ecosystems—advancing innovation, expanding global access, and delivering long-term value to patients, partners, and healthcare systems worldwide.
              </p>

              <Link href="/business-enquiry" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-xl font-medium hover:bg-brand-800 transition-colors">
                Propose an Alliance <ArrowRight className="w-4 h-4" />
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
                alt="Strategic Alliance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-brand-700 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
