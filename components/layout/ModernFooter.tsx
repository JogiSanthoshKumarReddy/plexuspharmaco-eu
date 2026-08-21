import Link from "next/link";
import { navigation } from "../../data/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 pt-20 pb-10 text-brand-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">Plexuspharmaco</h3>
            <p className="text-brand-300 leading-relaxed text-sm mb-6">
              A globally focused pharmaceutical company committed to building sustainable value through regulatory-compliant, high-quality healthcare solutions across regulated and emerging markets.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Follow us on LinkedIn" className="w-12 h-12 p-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Follow us on Twitter" className="w-12 h-12 p-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook" className="w-12 h-12 p-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Explore</h3>
            <ul className="flex flex-col gap-3">
              {navigation.slice(0, 4).map((nav, idx) => (
                <li key={idx}>
                  <span className="font-semibold text-brand-200 block mb-2">{nav.title}</span>
                  <ul className="flex flex-col gap-2 pl-3 border-l border-white/10">
                    {nav.items.slice(0, 3).map((item, i) => (
                      <li key={i}>
                        <Link href={item.href} className="text-sm text-brand-400 hover:text-white transition-colors inline-flex min-h-[48px] items-center">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Global Offices</h3>
            
            <div className="mb-6">
              <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-500" /> Germany (Head Office)
              </h4>
              <p className="text-sm text-brand-400 pl-6">
                Plexuspharmaco GmbH<br />
                Frankenstr. 34, 96146 Altendorf, Germany.
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:info@plexuspharmaco.com" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-500 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-300 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-500 font-medium uppercase tracking-wider mb-1">Email Support</span>
                    <span className="text-sm text-brand-300 group-hover:text-white transition-colors">info@plexuspharmaco.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+4915213048766" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-500 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-300 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-500 font-medium uppercase tracking-wider mb-1">Call Germany</span>
                    <span className="text-sm text-brand-300 group-hover:text-white transition-colors">+49 152 1304 8766</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-400">
            &copy; {currentYear} <span className="text-white font-medium">Plexuspharmaco Europe</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-brand-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors inline-flex min-h-[48px] items-center">Privacy Policy</Link>
            <Link href="/terms-condition" className="hover:text-white transition-colors inline-flex min-h-[48px] items-center">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors inline-flex min-h-[48px] items-center">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
