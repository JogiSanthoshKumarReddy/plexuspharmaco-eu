
"use client";
import { motion } from "framer-motion";
import { Leaf, Droplets, Wind, HeartHandshake, Stethoscope, GraduationCap, Users, ShieldCheck, Scale, Download } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

import VideoSectionPlayer from "@/components/common/VideoSectionPlayer";

export default function SustainabilityPage() {
  const envGoals = [
    {
      title: "Zero-Liquid Discharge",
      icon: Droplets,
      description: "100% of wastewater from our manufacturing facilities is treated, recycled, and reused within our operations."
    },
    {
      title: "Carbon Neutrality Goals",
      icon: Wind,
      description: "Transitioning to renewable energy sources across our global hubs to significantly reduce emissions and environmental impact."
    },
    {
      title: "Green Chemistry",
      icon: Leaf,
      description: "Innovating formulation processes to minimize toxic solvents and reduce energy consumption during API synthesis."
    }
  ];

  const govPrograms = [
    {
      title: "Ethical Business Practices",
      icon: ShieldCheck,
      description: "Strict adherence to international compliance laws, anti-corruption policies, and transparent financial reporting."
    },
    {
      title: "Board Diversity & Independence",
      icon: Users,
      description: "Maintaining a diverse leadership team with independent directors to ensure balanced and fair decision-making."
    },
    {
      title: "Risk Management",
      icon: Scale,
      description: "Proactive identification and mitigation of environmental, social, and operational risks across our global supply chain."
    }
  ];

  const csrPrograms = [
    {
      title: "Community Healthcare Access",
      icon: Stethoscope,
      description: "Running free diagnostic camps, mobile clinics, and subsidized medicine programs for underserved communities in rural India and Africa."
    },
    {
      title: "Medical Education Grants",
      icon: GraduationCap,
      description: "Providing scholarships and research grants to promising medical students and researchers in developing nations."
    },
    {
      title: "Employee Volunteering",
      icon: Users,
      description: "Plexuspharmaco employees dedicate over 10,000 hours annually to local community service, disaster relief, and health awareness campaigns."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="CSR & Sustainability"
        paths={[{ name: "Corporate", href: "/" }, { name: "Sustainability" }]}
        bgImage="/assets/images/pharma_hero_lab.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6 shadow-sm"
          >
            <HeartHandshake className="w-4 h-4 text-brand-700" />
            <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Our ESG Commitment</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Healing People, Protecting the Planet
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed font-light"
          >
            At Plexuspharmaco, Corporate Social Responsibility is not an afterthought; it is integrated into our core business strategy. Our Environmental, Social, and Governance (ESG) framework ensures that our rapid global growth never comes at the expense of our communities or our environment.
          </motion.p>
        </div>

        {/* ESG Video Tour Showcase */}
        <VideoSectionPlayer
          videoUrl="/assets/videos/plexus_sustainability_esg.mp4"
          posterUrl="/assets/images/pharma_video_poster_sustainability.jpg"
          title="Plexuspharmaco Green Manufacturing & CSR Initiatives"
          subtitle="Discover zero-liquid discharge water recycling, renewable solar power integration, and global community health programs."
          badge="Sustainability & ESG Video Tour"
        />

        {/* Environmental Sustainability */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image 
                src="/assets/images/pharma_hero_lab.png"
                alt="Green Manufacturing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-brand-900 mb-8">Environmental Stewardship</h3>
              <div className="space-y-8">
                {envGoals.map((goal, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 text-brand-700 shadow-sm border border-brand-100">
                      <goal.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-900 mb-2">{goal.title}</h4>
                      <p className="text-slate-600 font-light leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Responsibility / CSR */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image 
                src="/assets/images/pharma_hero_corporate.png"
                alt="Community Healthcare"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-brand-900 mb-8">Uplifting Communities</h3>
              <div className="space-y-8">
                {csrPrograms.map((prog, idx) => (
                  <div key={idx} className="flex gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0 text-accent-600">
                      <prog.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-900 mb-2">{prog.title}</h4>
                      <p className="text-slate-600 font-light leading-relaxed">{prog.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Corporate Governance */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image 
                src="/assets/images/pharma_hero_corporate.png"
                alt="Corporate Governance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-brand-900 mb-8">Corporate Governance</h3>
              <div className="space-y-8">
                {govPrograms.map((prog, idx) => (
                  <div key={idx} className="flex gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 text-brand-700">
                      <prog.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-900 mb-2">{prog.title}</h4>
                      <p className="text-slate-600 font-light leading-relaxed">{prog.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-900 mb-2">Sustainability & ESG Policy Framework</h3>
            <p className="text-slate-600">Download our complete ESG commitments, environmental stewardship goals, and CSR initiatives report.</p>
          </div>
          <a 
            href="/assets/pdfs/Plexuspharmaco_Sustainability_ESG_Framework.pdf"
            download="Plexuspharmaco_Sustainability_ESG_Framework.pdf"
            className="flex-shrink-0 inline-flex items-center gap-3 px-6 py-4 bg-brand-900 hover:bg-brand-800 text-white font-bold rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <Download className="w-5 h-5" /> Download ESG Framework (PDF)
          </a>
        </div>

      </div>
    </div>
  );
}
