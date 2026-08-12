"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, FlaskConical } from "lucide-react";

export default function Certifications() {
  const certs = [
    { title: "GMP Certified", desc: "Good Manufacturing Practices compliant across all facilities.", icon: ShieldCheck },
    { title: "ISO 9001:2015", desc: "Highest standards in Quality Management Systems.", icon: Award },
    { title: "FDA Registered", desc: "Key manufacturing sites are FDA registered and compliant.", icon: FileCheck },
    { title: "GLP Compliant", desc: "Good Laboratory Practice adherence in all R&D centers.", icon: FlaskConical },
  ];

  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/pharma/assets/images/696f65db8cb34.png')] bg-center bg-no-repeat bg-[length:50%]" style={{ filter: "grayscale(100%) invert(1)" }} />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Uncompromising Quality
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-200"
          >
            Our dedication to quality and safety is reflected in our rigorous compliance with the highest international regulatory standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:-translate-y-2 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-500 flex items-center justify-center mb-6 shadow-lg">
                <cert.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
              <p className="text-brand-100 text-sm leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
