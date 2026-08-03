import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function BusinessEnquiryPage() {
  return (
    <div className="modern-page-wrapper bg-brand-50 pb-24">
      <BreadcrumbHero
        title="Business Enquiry"
        paths={[{ name: "Contact", href: "/business-enquiry" }, { name: "Enquiry" }]}
        bgImage="/assets/images/breadcrumb/breadcrumb-3.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form Column */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col gap-6">
            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-brand-900 mb-6">Direct Contact</h3>

              <div className="flex flex-col gap-6">
                <a href="mailto:info@plexuspharmaco.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-accent-500 transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-brand-900 mb-1">Email Us</span>
                    <span className="text-brand-600 group-hover:text-brand-900 transition-colors">info@plexuspharmaco.com</span>
                  </div>
                </a>

                <a href="tel:+4915213048766" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-accent-500 transition-colors flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-brand-900 mb-1">Call Germany (HQ)</span>
                    <span className="text-brand-600 group-hover:text-brand-900 transition-colors">+49 152 1304 8766</span>
                  </div>
                </a>

                <a href="tel:+917304159520" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-accent-500 transition-colors flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-brand-900 mb-1">Call India</span>
                    <span className="text-brand-600 group-hover:text-brand-900 transition-colors">+91 7304159520</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Offices Card */}
            <div className="bg-brand-900 rounded-3xl p-8 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-6">Our Global Offices</h3>

              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-semibold text-brand-200 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-500" /> Germany (Head Office)
                  </h4>
                  <p className="text-sm text-brand-300 pl-6 leading-relaxed">
                    Plexuspharmaco GmbH<br />
                    Frankenstr. 34<br />
                    96146, Altendorf Germany.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-semibold text-brand-200 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-500" /> India Offices
                  </h4>
                  <p className="text-sm text-brand-300 pl-6 leading-relaxed mb-3">
                    <strong>Plexus Biogenix LLP</strong><br />
                    Janapath, 217 Sadashiv Peth<br />
                    Pune – 411030 (MS), India.
                  </p>
                  <p className="text-sm text-brand-300 pl-6 leading-relaxed">
                    <strong>Plexus Biocare Pvt. Ltd.</strong><br />
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
