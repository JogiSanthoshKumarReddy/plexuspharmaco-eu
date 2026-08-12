"use client";
import { motion } from "framer-motion";
import { Users, GraduationCap, TrendingUp, Lightbulb, CheckCircle2 } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function LifePage() {
  const values = [
    {
      title: "Skill Development Programs",
      icon: GraduationCap,
    },
    {
      title: "Mentorship & Coaching",
      icon: Users,
    },
    {
      title: "Knowledge Sharing Culture",
      icon: Lightbulb,
    },
    {
      title: "Career Progression Opportunities",
      icon: TrendingUp,
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Life at Plexuspharmaco"
        paths={[{ name: "Careers", href: "/" }, { name: "Life at Plexus" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Culture Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-700" />
                <span className="text-sm font-bold text-brand-900 uppercase tracking-widest">Our Culture</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Integrity, Quality, and Scientific Responsibility
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Plexuspharmaco, our culture is built on integrity, quality, and scientific responsibility. We foster an environment where compliance, ethical practices, and patient safety are at the core of every decision, encouraging accountability and excellence across teams.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We believe in collaboration, continuous learning, and innovation. By empowering our people, valuing diverse perspectives, and supporting professional growth, we create a workplace where individuals contribute meaningfully to global healthcare and grow together with the organization.
              </p>
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
                src="/assets/images/resources/life.jpg"
                alt="Life at Plexus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Growth & Learning Section */}
        <div className="bg-brand-900 rounded-3xl p-8 lg:p-16 text-white mb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <h3 className="text-4xl font-bold mb-6">Growth & Learning</h3>
                <p className="text-brand-200 text-lg leading-relaxed mb-6">
                  At our company, we believe that continuous growth and learning are the cornerstones of both personal and organizational success. We strive to create an environment where every team member has the opportunity to expand their skills, knowledge, and career potential.
                </p>
                <p className="text-brand-200 text-lg leading-relaxed">
                  <strong>Our Commitment:</strong> We are committed to nurturing an environment where learning never stops, and where every individual feels empowered to grow, innovate, and reach their full potential.
                </p>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((val, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  >
                    <val.icon className="w-8 h-8 text-brand-300 mb-4" />
                    <h4 className="font-bold text-white">{val.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Preview */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-brand-900 mb-12">Team & Workplace</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-sm"
              >
                <Image 
                  src={`/assets/images/g${num}.jpg`}
                  alt="Workplace"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
