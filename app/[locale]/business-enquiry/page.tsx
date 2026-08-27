"use client";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import ContactForm from "@/components/contact/ContactForm";
import GlobalPresenceMap from "@/components/home/GlobalPresenceMap";
import { Mail, MapPin, Phone, Clock, Briefcase, Stethoscope, Users, Building2, AlertTriangle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, Suspense } from "react";

export default function BusinessEnquiryPage() {
  const departments = [
    { name: "Global Sales & Distribution", email: "sales@plexuspharmaco.eu", icon: Building2 },
    { name: "Regulatory Affairs", email: "regulatory@plexuspharmaco.eu", icon: Stethoscope },
    { name: "Human Resources (Careers)", email: "careers@plexuspharmaco.eu", icon: Users },
    { name: "Partnerships & Licensing", email: "partner@plexuspharmaco.eu", icon: Briefcase }
  ];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What product categories Plexuspharmaco GmbH works with?", a: "Plexuspharmaco GmbH works with Pharmaceuticals, food supplements, specially formulated nutraceuticals and medical devices of Class-I, II and III." },
    { q: "How long does it take for a sales representative to respond?", a: "Our Global Sales & Distribution team typically responds to all inquiries within 24-48 business hours. For urgent regulatory matters, please contact the specific regional office directly via phone." },
    { q: "Do you offer white-labeling services for nutraceuticals?", a: "Yes, our Biocare division specializes in white-label and private-label nutraceuticals. Please direct these specific inquiries to partner@plexuspharmaco.eu." },
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 pb-24 relative overflow-hidden">
      <BreadcrumbHero
        title="Contact & Global Offices"
        paths={[{ name: "Corporate", href: "/" }, { name: "Contact Us" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16 relative z-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-900 mb-6">How Can We Help You?</h2>
          <p className="text-lg text-slate-600 font-light">Whether you are looking for a scientifically validated healthcare products, or willing to offer your patented formulations, or want to join our global team, we are ready to connect.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            
            {/* Primary Contact Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-100 group">
              <h3 className="text-xl font-bold text-brand-900 mb-8 tracking-wide">German Headquarters</h3>
              <div className="flex flex-col gap-8">
                <a href="mailto:info@plexuspharmaco.eu" className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent-500 group-hover/item:text-white transition-all text-brand-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">General Email</span>
                    <span className="text-brand-900 font-medium group-hover/item:text-brand-600 transition-colors">info@plexuspharmaco.eu</span>
                  </div>
                </a>

                <a href="tel:+4915255460529" className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent-500 group-hover/item:text-white transition-all text-brand-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Direct Phone (HQ)</span>
                    <span className="text-brand-900 font-medium group-hover/item:text-brand-600 transition-colors">+49 1525 5460529</span>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 text-brand-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Address</span>
                    <span className="text-brand-900 font-medium leading-relaxed">Frankenstr. 34, 96146 Altendorf, Germany.</span>
                  </div>
                </div>

                <div className="flex items-start gap-5 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 text-brand-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Working Hours</span>
                    <span className="text-brand-900 font-medium">Mon - Fri: 09:00 - 18:00 CET</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-accent-500 rounded-[2rem] p-8 shadow-lg text-white">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-brand-100" />
                <h3 className="text-xl font-bold">Pharmacovigilance</h3>
              </div>
              <p className="text-brand-100 text-sm mb-6 leading-relaxed">For urgent reporting of adverse drug reactions or product quality complaints, please contact our 24/7 safety desk.</p>
              <a href="mailto:safety@plexuspharmaco.eu" className="block w-full py-3 bg-white text-accent-600 font-bold text-center rounded-xl hover:bg-brand-50 transition-colors">
                safety@plexuspharmaco.eu
              </a>
            </div>

          </motion.div>
        </div>

        {/* Department Contacts */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-brand-900 mb-10 text-center">Specific Inquiries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <a key={idx} href={`mailto:${dept.email}`} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-300 hover:shadow-md transition-all group block text-center">
                <dept.icon className="w-8 h-8 text-brand-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-brand-900 mb-2">{dept.name}</h4>
                <p className="text-sm text-brand-600 font-medium break-all">{dept.email}</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h3 className="text-3xl font-bold text-brand-900 mb-10 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-brand-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
      
      {/* Interactive Map */}
      <GlobalPresenceMap />
      
    </div>
  );
}
