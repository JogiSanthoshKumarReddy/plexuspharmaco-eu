import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function BusinessEnquiryPage() {
  return (
    <div className="modern-page-wrapper bg-slate-950 pb-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      <BreadcrumbHero
        title="Business Enquiry"
        paths={[{ name: "Contact", href: "/business-enquiry" }, { name: "Enquiry" }]}
        bgImage="/assets/images/breadcrumb/breadcrumb-3.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form Column */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col gap-6">
            {/* Direct Contact Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/10 group">
              <h3 className="text-2xl font-bold text-white mb-8 tracking-wide">Direct Contact</h3>

              <div className="flex flex-col gap-8">
                <a href="mailto:info@plexuspharmaco.com" className="flex items-start gap-5 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-brand-500 group-hover/item:border-brand-400 transition-all duration-300 flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-300 mb-1 uppercase tracking-wider">Email Us</span>
                    <span className="text-white font-medium group-hover/item:text-accent-400 transition-colors text-lg">info@plexuspharmaco.com</span>
                  </div>
                </a>

                <a href="tel:+4915213048766" className="flex items-start gap-5 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-brand-500 group-hover/item:border-brand-400 transition-all duration-300 flex-shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-300 mb-1 uppercase tracking-wider">Germany (HQ)</span>
                    <span className="text-white font-medium group-hover/item:text-accent-400 transition-colors text-lg">+49 152 1304 8766</span>
                  </div>
                </a>

                <a href="tel:+917304159520" className="flex items-start gap-5 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-brand-500 group-hover/item:border-brand-400 transition-all duration-300 flex-shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-300 mb-1 uppercase tracking-wider">India</span>
                    <span className="text-white font-medium group-hover/item:text-accent-400 transition-colors text-lg">+91 7304159520</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Offices Card */}
            <div className="bg-brand-900/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-brand-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-[40px] pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-8 tracking-wide relative z-10">Our Global Offices</h3>

              <div className="flex flex-col gap-6 relative z-10">
                <div>
                  <h4 className="font-bold text-accent-400 mb-2 flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5" /> Germany (Head Office)
                  </h4>
                  <p className="text-slate-300 pl-7 leading-relaxed font-light">
                    Plexuspharmaco GmbH<br />
                    Frankenstr. 34<br />
                    96146, Altendorf Germany.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6 mt-2">
                  <h4 className="font-bold text-accent-400 mb-2 flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5" /> India Offices
                  </h4>
                  <p className="text-slate-300 pl-7 leading-relaxed mb-4 font-light">
                    <strong className="text-white font-semibold">Plexus Biogenix LLP</strong><br />
                    Janapath, 217 Sadashiv Peth<br />
                    Pune – 411030 (MS), India.
                  </p>
                  <p className="text-slate-300 pl-7 leading-relaxed font-light">
                    <strong className="text-white font-semibold">Plexus Biocare Pvt. Ltd.</strong><br />
                    Sankruti Sankul, Sitabuldi<br />
                    Nagpur – 440012 (MS), India.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
