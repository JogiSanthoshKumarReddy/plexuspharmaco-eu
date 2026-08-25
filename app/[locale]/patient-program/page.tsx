
"use client";
import { motion } from "framer-motion";
import { HeartPulse, CheckCircle2, UserCheck, Stethoscope, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";

export default function PatientProgramPage() {
  const pillars = [
    {
      title: "Personalized Support",
      icon: HeartPulse,
      description: "Programs designed to provide ongoing support, helping patients understand their treatment and manage side effects."
    },
    {
      title: "Ethical & Compliant",
      icon: CheckCircle2,
      description: "Clinically informed, ethically guided, and fully compliant with local and international healthcare regulations."
    },
    {
      title: "Digital Engagement",
      icon: UserCheck,
      description: "Utilizing telemedicine platforms and secure engagement channels to make support accessible and continuous."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Patient Support Programs"
        paths={[{ name: "Patient & Healthcare", href: "/" }, { name: "Patient Programs" }]}
        bgImage="/assets/images/pharma_hero_mfg.png"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 mb-6 shadow-sm">
                <Stethoscope className="w-4 h-4 text-brand-700" />
                <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Patient Centric Care</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Putting Patients at the Heart of Healthcare
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Plexus Pharmaco, we put patients at the heart of everything we do. Our Patient Support Programs are designed to provide personalized guidance, education, and ongoing support.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                By combining scientific insight, patient-centric care, and real-world data, our programs empower patients, strengthen adherence, and foster collaboration with healthcare providers—ultimately contributing to healthier communities and measurable clinical impact.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/healthcare-tool" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-xl font-medium hover:bg-brand-800 transition-colors">
                  Healthcare Professional Tools <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
                src="/assets/images/resources/patient.png"
                alt="Patient Program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300">
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
