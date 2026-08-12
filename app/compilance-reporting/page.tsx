"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";

import { useState } from "react";

export default function ComplianceReportingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: "Compliance Report",
      form_name: formData.get("name") || "Anonymous",
      form_email: formData.get("email") || "Anonymous",
      form_subject: formData.get("subject"),
      form_message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later or contact us directly at compliance@plexuspharmaco.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Compliance & Reporting"
        paths={[{ name: "Contact & Support", href: "/" }, { name: "Compliance" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6 shadow-sm"
          >
            <ShieldAlert className="w-4 h-4 text-red-600" />
            <span className="text-sm font-bold text-red-600 uppercase tracking-widest">Confidential Reporting</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Upholding Corporate Integrity
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Plexuspharmaco is committed to maintaining the highest ethical standards. If you have observed behavior that violates our corporate policies, regulatory standards, or ethical guidelines, we encourage you to report it safely and confidentially.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Cards */}
          <div className="w-full lg:w-1/3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2">Compliance Officer</h3>
              <p className="text-slate-600 mb-4">Direct and confidential email to the Chief Compliance Officer.</p>
              <a href="mailto:compliance@plexuspharmaco.com" className="text-brand-700 font-bold hover:text-brand-900 transition-colors">
                compliance@plexuspharmaco.com
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2">Whistleblower Protection</h3>
              <p className="text-slate-600">
                All reports are treated with strict confidentiality. Plexuspharmaco explicitly prohibits any form of retaliation against individuals who report concerns in good faith.
              </p>
            </motion.div>
          </div>

          {/* Reporting Form */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-lg relative overflow-hidden"
            >
              {/* Success Overlay */}
              <div 
                className={`absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center transition-all duration-500 ${
                  isSuccess ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
              >
                <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                <h3 className="text-3xl font-bold text-brand-900 mb-2">Report Submitted securely</h3>
                <p className="text-brand-600 text-center max-w-sm">
                  Your confidential report has been submitted to the Compliance Officer.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-brand-900 mb-8">Secure Reporting Form</h3>
              
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium border border-red-100">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name (Optional)</label>
                    <input id="name" name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address (Optional)</label>
                    <input id="email" name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="Enter your email" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Subject *</label>
                  <input id="subject" name="subject" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="Nature of report" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message Details *</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none" placeholder="Please provide as much detail as possible..." required></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-4 bg-brand-900 text-white rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? "Submitting..." : "Submit Confidential Report"} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
