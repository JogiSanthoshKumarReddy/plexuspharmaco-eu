import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const menu = [
  { name: "Home", href: "/" },
  {
    name: "Company",
    href: "#",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Corporate Governance", href: "/corporate-governance" },
    ],
  },
  {
    name: "Product Catalogue",
    href: "#",
    dropdown: [
      { name: "Product", href: "/product-catalogue" },
      { name: "Pipeline / Under Development", href: "/pipeline" },
    ],
  },
  {
    name: "Manufacturing & Quality",
    href: "#",
    dropdown: [
      { name: "Manufacturing Capabilities", href: "/manufacture-capability" },
      { name: "Quality Assurance & Control", href: "/quality-assurance" },
      { name: "Regulatory Compliance", href: "/regulatory-compliance" },
      { name: "Contract Manufacturing (CMO/CDMO)", href: "/contract-manufacturing" },
    ],
  },
  {
    name: "Innovation & Technology",
    href: "#",
    dropdown: [
      { name: "Research & Development", href: "/research" },
      { name: "Technology Platforms", href: "/technology-platforms" },
      { name: "Intellectual Property", href: "/intellectual-property" },
    ],
  },
  {
    name: "Global Markets",
    href: "#",
    dropdown: [
      { name: "Global Presence", href: "/presence" },
      { name: "Country Profiles", href: "/profile" },
      { name: "Export & Logistics", href: "/logistics" },
    ],
  },
  {
    name: "Business Partnerships",
    href: "#",
    dropdown: [
      { name: "Licensing Opportunities", href: "/licensing" },
      { name: "Distributorship & Agency", href: "/distributorship" },
      { name: "Strategic Alliances", href: "/strategic-alliance" },
    ],
  },
  {
    name: "Corporate Social Responsibility (CSR)",
    href: "#",
    dropdown: [
      { name: "Health & Community Initiatives", href: "/health-community" },
      { name: "Sustainability & Environment", href: "/sustainability" },
      { name: "Ethical Standards", href: "/ethical-standard" },
    ],
  },
  {
    name: "News & Media",
    href: "#",
    dropdown: [
      { name: "Press Releases", href: "/press-release" },
      { name: "Media Coverage", href: "/media" },
      { name: "Events & Conferences", href: "/event" },
    ],
  },
  {
    name: "Careers",
    href: "#",
    dropdown: [
      { name: "Explore Gallery", href: "/gallery" },
      { name: "Life at Plexuspharmaco", href: "/life" },
      { name: "Job Openings", href: "/job-opening" },
      { name: "Internship & Training", href: "/internship" },
    ],
  },
  {
    name: "Investors",
    href: "#",
    dropdown: [
      { name: "Investor Relations", href: "/investor-relation" },
      { name: "Financial Reports", href: "/financial-report" },
    ],
  },
  {
    name: "Contact & Support",
    href: "#",
    dropdown: [
      { name: "Global Offices", href: "/global-office" },
      { name: "Business Inquiry Form", href: "/business-enquiry" },
      { name: "Compliance & Reporting", href: "/compilance-reporting" },
    ],
  },
  {
    name: "Patient & Healthcare",
    href: "#",
    dropdown: [
      { name: "Patient Support Programs", href: "/patient-program" },
      { name: "Healthcare Professional Tools", href: "/healthcare-tool" },
    ],
  },
];

export default function Navbar() {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {menu.map((item) => (
        <div key={item.name} className="relative group">
          <Link
            href={item.href}
            className="flex items-center gap-1 text-[13px] font-bold text-[#00173c] transition hover:text-[#1b73e8] py-6 tracking-wide"
          >
            {item.name.toUpperCase()}
            {item.dropdown && <ChevronDown className="h-4 w-4" />}
          </Link>
          
          {item.dropdown && (
            <div className="absolute left-0 top-full hidden w-64 flex-col bg-white shadow-xl border-t-4 border-[#1b73e8] group-hover:flex z-50 animate-in fade-in slide-in-from-top-2">
              {item.dropdown.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className="px-5 py-3 text-[14px] text-gray-700 hover:bg-[#f4f5f8] hover:text-[#1b73e8] hover:pl-6 font-medium transition-all duration-300 border-b border-gray-100 last:border-none"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}