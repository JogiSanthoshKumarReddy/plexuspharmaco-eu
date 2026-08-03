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
      { name: "Our Team", href: "/about#team" },
      { name: "Corporate Governance", href: "/corporate-governance" },
    ],
  },
  {
    title: "Product Catalogue",
    items: [
      { name: "Product", href: "/product-catalogue" },
      { name: "Pipeline / Under Development", href: "/pipeline" },
    ],
  },
  {
    title: "Manufacturing & Quality",
    items: [
      { name: "Manufacturing Capabilities", href: "/manufacture-capability" },
      { name: "Quality Assurance & Control", href: "/quality-assurance" },
      { name: "Regulatory Compliance", href: "/regulatory-compliance" },
      { name: "Contract Manufacturing (CMO/CDMO)", href: "/contract-manufacturing" },
    ],
  },
  {
    title: "Innovation & Technology",
    items: [
      { name: "Research & Development", href: "/research" },
      { name: "Technology Platforms", href: "/technology-platforms" },
      { name: "Intellectual Property", href: "/intellectual-property" },
    ],
  },
  {
    title: "Global Markets",
    items: [
      { name: "Global Presence", href: "/presence" },
      { name: "Country Profiles", href: "/profile" },
      { name: "Export & Logistics", href: "/logistics" },
    ],
  },
  {
    title: "Business Partnerships",
    items: [
      { name: "Licensing Opportunities", href: "/licensing" },
      { name: "Distributorship & Agency", href: "/distributorship" },
      { name: "Strategic Alliances", href: "/strategic-alliance" },
    ],
  },
  {
    title: "Corporate Social Responsibility (CSR)",
    items: [
      { name: "Health & Community Initiatives", href: "/health-community" },
      { name: "Sustainability & Environment", href: "/sustainability" },
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
      { name: "Explore Gallery", href: "/gallery" },
      { name: "Life at Plexuspharmaco", href: "/life" },
      { name: "Job Openings", href: "/job-opening" },
      { name: "Internship & Training", href: "/internship" },
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
      { name: "Global Office", href: "/global-office" },
      { name: "Business Inquiry Form", href: "/business-enquiry" },
      { name: "Compliance & Reporting", href: "/compilance-reporting" },
    ],
  },
  {
    title: "Patient & Healthcarer",
    items: [
      { name: "Patient Support Programs", href: "/patient-program" },
      { name: "Healthcare Professional Tools", href: "/healthcare-tool" },
    ],
  },
];