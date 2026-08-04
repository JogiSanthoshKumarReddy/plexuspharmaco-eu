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
      { name: "Corporate Social Responsibility", href: "/sustainability" },
      { name: "News & Media", href: "/media" },
      { name: "Investor Relations", href: "/investor-relation" },
      { name: "Careers", href: "/job-opening" },
    ],
  },
  {
    title: "Products & Patients",
    items: [
      { name: "Product Catalogue", href: "/product-catalogue" },
      { name: "Pipeline / R&D", href: "/pipeline" },
      { name: "Patient Support Programs", href: "/patient-program" },
      { name: "Healthcare Professional Tools", href: "/healthcare-tool" },
    ],
  },
  {
    title: "Operations",
    items: [
      { name: "Manufacturing Capabilities", href: "/manufacture-capability" },
      { name: "Quality Assurance & Control", href: "/quality-assurance" },
      { name: "Regulatory Compliance", href: "/regulatory-compliance" },
      { name: "Contract Manufacturing", href: "/contract-manufacturing" },
      { name: "Global Presence & Logistics", href: "/logistics" },
    ],
  },
  {
    title: "Innovation & Partners",
    items: [
      { name: "Research & Development", href: "/research" },
      { name: "Technology Platforms", href: "/technology-platforms" },
      { name: "Intellectual Property", href: "/intellectual-property" },
      { name: "Licensing Opportunities", href: "/licensing" },
      { name: "Business Partnerships", href: "/strategic-alliance" },
    ],
  },
];