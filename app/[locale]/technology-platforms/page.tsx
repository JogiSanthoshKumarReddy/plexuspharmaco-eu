
"use client";
import { motion } from "framer-motion";
import { Cpu, Fingerprint, Database, CheckCircle2 } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

import VideoSectionPlayer from "@/components/common/VideoSectionPlayer";

export default function TechnologyPlatformsPage() {
  const pillars = [
    {
      title: "Advanced Formulation",
      icon: Cpu,
      description: "Applying liposomal and specialized delivery systems designed to support diverse dosage forms."
    },
    {
      title: "Digital Integration",
      icon: Database,
      description: "Deploying electronic Quality Management Systems (eQMS) and data-driven compliance tools for faster regulatory responses."
    },
    {
      title: "Continuous Improvement",
      icon: Fingerprint,
      description: "Integrating digital quality platforms with manufacturing to ensure data integrity and execution excellence."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Technology Platforms"
        paths={[{ name: "Innovation", href: "/research-development" }, { name: "Technology Platforms" }]}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 mb-6 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-700" />
                <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Scalable & Compliant</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Technology-Enabled Solutions
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Technology at Plexuspharmaco is selected and deployed through a structured, evidence-based approach that balances scientific robustness, regulatory acceptability, and commercial scalability. 
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our technology platforms are designed to support diverse dosage forms and delivery systems while meeting global regulatory expectations. We apply advanced formulation technologies, supported by process engineering and digital enablement.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Digitalization is a core pillar of our technology strategy, enabling proactive risk identification, faster regulatory responses, and effective lifecycle management across products and geographies.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image 
                src="/assets/images/img/i2.jpg"
                alt="Technology Platforms"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Technology Devices Video Showcase */}
        <VideoSectionPlayer
          videoUrl="/assets/videos/plexus_medical_devices.mp4"
          posterUrl="/assets/images/pharma_hero_mfg.png"
          title="Pre-Filled Syringes & Drug Delivery Platforms"
          subtitle="Explore ISO 13485 sterile isolator assembly, transdermal drug delivery matrices, and CE-marked medical device platforms."
          badge="Medical Devices Video Showcase"
        />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {pillars.map((item, idx) => (
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

      </div>
    </div>
  );
}
