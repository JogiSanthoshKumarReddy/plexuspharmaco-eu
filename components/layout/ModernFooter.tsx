import Link from "next/link";
import { navigation } from "../../data/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ModernFooter({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 pt-20 pb-10 text-brand-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">Plexuspharmaco GmbH</h3>
            <p className="text-brand-300 leading-relaxed text-sm mb-6">
              A globally focused healthcare company committed to building sustainable value through high-quality and regulatory-compliant healthcare solutions across regulated and emerging markets.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/plexuspharmaco/home/?viewAsMember=true" target="_blank" rel="noreferrer" aria-label="Follow us on LinkedIn" className="w-12 h-12 p-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/plexuspharmaco/" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram" className="w-12 h-12 p-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61592683265743" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook" className="w-12 h-12 p-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
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
                        <Link href={`/${locale}${item.href}`} className="text-sm text-brand-400 hover:text-white transition-colors inline-flex min-h-[48px] items-center">
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
                <a href="mailto:info@plexuspharmaco.eu" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-500 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-300 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-500 font-medium uppercase tracking-wider mb-1">Email Support</span>
                    <span className="text-sm text-brand-300 group-hover:text-white transition-colors">info@plexuspharmaco.eu</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+4915255460529" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-500 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-300 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-500 font-medium uppercase tracking-wider mb-1">Call Germany</span>
                    <span className="text-sm text-brand-300 group-hover:text-white transition-colors">+49 1525 5460529</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-400">
            &copy; {currentYear} <span className="text-white font-medium">Plexuspharmaco GmbH</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-brand-400">
            <Link href={`/${locale}/privacy-policy`} className="hover:text-white transition-colors inline-flex min-h-[48px] items-center">Privacy Policy</Link>
            <Link href={`/${locale}/terms-condition`} className="hover:text-white transition-colors inline-flex min-h-[48px] items-center">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors inline-flex min-h-[48px] items-center">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
