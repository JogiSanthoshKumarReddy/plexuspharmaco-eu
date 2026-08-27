import Link from "next/link";
import { navigation } from "../../data/navigation";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

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
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/plexuspharmaco/" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram" className="w-12 h-12 p-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61592683265743" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook" className="w-12 h-12 p-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
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
