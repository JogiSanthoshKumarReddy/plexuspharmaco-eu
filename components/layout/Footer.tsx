import Container from "../common/Container";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-gray-800">
          <div>
            <Image
              src="/images/logo.png"
              alt="Plexuspharmaco"
              width={200}
              height={50}
              className="mb-6 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-6">
              Plexuspharmaco GmbH is a Germany-based pharmaceutical organization committed to delivering high-quality, evidence-based, and accessible healthcare solutions worldwide.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-blue-500 transition">About Us</Link></li>
              <li><Link href="/product-catalogue" className="hover:text-blue-500 transition">Product Catalogue</Link></li>
              <li><Link href="/research" className="hover:text-blue-500 transition">Research & Development</Link></li>
              <li><Link href="/manufacture-capability" className="hover:text-blue-500 transition">Manufacturing & Quality</Link></li>
              <li><Link href="/global-office" className="hover:text-blue-500 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/contract-manufacturing" className="hover:text-blue-500 transition">Contract Manufacturing</Link></li>
              <li><Link href="/regulatory-compliance" className="hover:text-blue-500 transition">Regulatory & Compliance</Link></li>
              <li><Link href="/logistics" className="hover:text-blue-500 transition">Global Distribution</Link></li>
              <li><Link href="/licensing" className="hover:text-blue-500 transition">Licensing & Partnerships</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span>Germany</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <span>+49 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <a href="mailto:info@plexuspharmaco.eu" className="hover:text-blue-500 transition">
                  info@plexuspharmaco.eu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Plexuspharmaco GmbH. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-blue-500 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-500 transition">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}