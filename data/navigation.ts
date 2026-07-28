/**
 * navigation.ts — Central navigation data for Plexuspharmaco.
 * Used by Navbar.tsx. Mirrors the structure in HeaderHTML.tsx.
 * Update both files when adding new routes.
 */
export const navigation = [
  {
    title: "Company",
    items: [
      { name: "About Us", href: "/about" },
      { name: "Corporate Governance", href: "/corporate-governance" },
      { name: "Profile", href: "/profile" },
    ],
  },
  {
    title: "Products",
    items: [
      { name: "Product Catalogue", href: "/product-catalogue" },
      { name: "Pipeline", href: "/pipeline" },
      { name: "Licensing", href: "/licensing" },
    ],
  },
  {
    title: "R&D, Manufacturing & Quality",
    items: [
      { name: "Research & Development", href: "/research-development" },
      { name: "Manufacturing Capabilities", href: "/manufacture-capability" },
      { name: "Quality Assurance", href: "/quality-assurance" },
      { name: "Contract Manufacturing", href: "/contract-manufacturing" },
      { name: "Technology Platforms", href: "/technology-platforms" },
      { name: "Regulatory Compliance", href: "/regulatory-compliance" },
      { name: "Intellectual Property", href: "/intellectual-property" },
    ],
  },
  {
    title: "Global Footprints",
    items: [
      { name: "Global Presence", href: "/presence" },
      { name: "Joint Ventures", href: "/joint-venture" },
      { name: "Partnership", href: "/partnership" },
      { name: "Distributorship", href: "/distributorship" },
      { name: "Strategic Alliance", href: "/strategic-alliance" },
      { name: "Logistics", href: "/logistics" },
      { name: "Global Offices", href: "/global-office" },
    ],
  },
  {
    title: "Responsibility",
    items: [
      { name: "Health Community", href: "/health-community" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Ethical Standards", href: "/ethical-standard" },
    ],
  },
  {
    title: "News & Media",
    items: [
      { name: "Press Releases", href: "/press-release" },
      { name: "Media Coverage", href: "/media" },
      { name: "Events & Conferences", href: "/event" },
    ],
  },
  {
    title: "Careers",
    items: [
      { name: "Life at Plexuspharmaco", href: "/life" },
      { name: "Job Openings", href: "/job-opening" },
      { name: "Internships", href: "/internship" },
      { name: "Photo Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Investors",
    items: [
      { name: "Investor Relations", href: "/investor-relation" },
      { name: "Financial Reports", href: "/financial-report" },
    ],
  },
  {
    title: "Contact & Support",
    items: [
      { name: "Business Enquiry", href: "/business-enquiry" },
      { name: "Compliance & Reporting", href: "/compilance-reporting" },
      { name: "Patient Programs", href: "/patient-program" },
      { name: "Healthcare Tools", href: "/healthcare-tool" },
    ],
  },
];