"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe2 } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function GlobalOfficePage() {
  const offices = [
    {
      id: "germany",
      title: "European Headquarters",
      country: "Germany",
      company: "Plexuspharmaco GmbH",
      address: "Frankenstr. 34, 96146, Altendorf Germany.",
      phone: "+49 152 1304 8766",
      email: "info@plexuspharmaco.com",
      image: "/assets/images/about/about-style2-1.jpg"
    },
    {
      id: "india-pune",
      title: "Asia Pacific Operations",
      country: "India",
      company: "Plexus Biogenix LLP",
      address: "Janapath, 217 Sadashiv Peth, Pune – 411030 (MS), India.",
      phone: "+91 7304159520",
      email: "info@plexuspharmaco.com",
      image: "/assets/images/about/about-style2-2.jpg"
    },
    {
      id: "india-nagpur",
      title: "Manufacturing & Distribution",
      country: "India",
      company: "Plexus Biocare Pvt. Ltd.",
      address: "Sankruti Sankul, Sitabuldi, Nagpur – 440012 (MS), India.",
      phone: "+91 7304159520",
      email: "info@plexuspharmaco.com",
      image: "/assets/images/about/about-style2-3.jpg"
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Global Presence"
        paths={[{ name: "Contact & Support", href: "#" }, { name: "Global Offices" }]}
        bgImage="/assets/images/breadcrumb/office-bg.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 mb-6 shadow-sm"
          >
            <Globe2 className="w-4 h-4 text-brand-700" />
            <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Our Strategic Footprint</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-brand-900 mb-6"
          >
            Delivering Healthcare Solutions Across Continents
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-600 leading-relaxed"
          >
            With our European headquarters in Germany and expansive operations across India, Plexuspharmaco maintains a robust, highly integrated global supply chain designed to support our partners in regulated and emerging markets worldwide.
          </motion.p>
        </div>

        {/* Global Map Illustration (Placeholder for a real SVG Map if available) */}
        <div className="w-full h-64 md:h-96 bg-brand-900 rounded-3xl mb-16 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("/assets/images/resources/map-pattern.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="relative z-10 text-center">
            <Globe2 className="w-24 h-24 text-white/50 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Connecting Global Markets</h3>
          </div>
        </div>

        {/* Office Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office, idx) => (
            <motion.div 
              key={office.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-brand-50">
                 <Image 
                    src={office.image.includes('placeholder') ? '/assets/images/resources/no-image.jpg' : office.image}
                    alt={office.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 mix-blend-multiply"
                 />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-900 border border-brand-100 shadow-sm flex items-center gap-1">
                   <MapPin className="w-3 h-3 text-accent-500" /> {office.country}
                 </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-2">{office.title}</h4>
                <h3 className="text-2xl font-bold text-brand-900 mb-6">{office.company}</h3>
                
                <div className="flex flex-col gap-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-600 text-sm leading-relaxed">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-300 flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-brand-600 text-sm hover:text-brand-900 transition-colors">{office.phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-300 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-brand-600 text-sm hover:text-brand-900 transition-colors">{office.email}</a>
                  </div>
                </div>
                
                <a href="/business-enquiry" className="w-full py-3 px-4 bg-brand-50 hover:bg-brand-900 text-brand-700 hover:text-white font-medium rounded-xl transition-colors duration-300 flex items-center justify-center text-sm">
                  Contact Office
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
