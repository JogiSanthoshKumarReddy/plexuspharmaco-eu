"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What markets does Plexuspharmaco operate in?",
    answer: "We operate in over 45 regulated and semi-regulated markets globally, including key presence across Europe, Asia, Africa, LATAM, GCC, and CIS regions."
  },
  {
    question: "What are your primary therapeutic areas?",
    answer: "Our extensive portfolio covers critical therapeutic segments including Cardiology, Diabetology, Oncology, Neurology, Gastroenterology, and specialized Anti-Infectives."
  },
  {
    question: "Are your manufacturing facilities internationally certified?",
    answer: "Yes, our manufacturing hubs in Europe and Asia strictly adhere to WHO-GMP, EU-GMP, and US FDA compliance standards to ensure the highest levels of safety and efficacy."
  },
  {
    question: "Do you offer contract manufacturing (CMO) services?",
    answer: "Absolutely. We provide end-to-end contract manufacturing and out-licensing opportunities for pharmaceutical FDFs, nutraceuticals, and dermo-cosmetics to strategic partners worldwide."
  },
  {
    question: "How does Plexuspharmaco ensure supply chain reliability?",
    answer: "We leverage a highly integrated global logistics network, diversified manufacturing sites, and rigorous risk management protocols to ensure uninterrupted delivery of critical medicines."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 mb-6 shadow-sm"
          >
            <HelpCircle className="w-4 h-4 text-brand-700" />
            <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Common Inquiries</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-900 mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Find quick answers to common questions about our global operations, manufacturing standards, and partnership opportunities.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${idx}`}
                  className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 border text-left ${isOpen ? 'bg-brand-900 border-brand-900 shadow-lg' : 'bg-white border-slate-200 hover:border-brand-300 hover:shadow-md'}`}
                >
                  <span className={`text-lg font-semibold pr-8 ${isOpen ? 'text-white' : 'text-brand-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-white/20 text-white' : 'bg-slate-100 text-brand-600'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <motion.div
                  id={`faq-${idx}`}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <div className="p-6 text-slate-600 leading-relaxed bg-white/50 rounded-b-2xl border-x border-b border-slate-200 -mt-2 pt-6">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
