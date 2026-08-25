export interface PressRelease {
  id: string;
  title: string;
  date: string;
  category: string;
  author: string;
  image: string;
  summary: string;
  content: string;
}

export const pressReleases: PressRelease[] = [
  {
    id: "welcome-to-plexuspharmaco",
    title: "Welcome to Plexus Pharmaco Europe",
    date: "Aug 15, 2026",
    category: "Corporate News",
    author: "Corporate Comms",
    image: "/assets/images/pharma_hero_corporate.png",
    summary: "Welcome to the official news portal of Plexus Pharmaco Europe.",
    content: "Welcome to the official news portal of Plexus Pharmaco Europe. We are committed to transparency, compliance, and excellence in healthcare. Please check back later for official announcements, regulatory updates, and corporate milestones. [PENDING CLIENT APPROVAL]"
  },
  {
    id: "new-rnd-facility-munich",
    title: "Plexus Pharmaco Announces New R&D Facility in Munich",
    date: "Jul 22, 2026",
    category: "Research",
    author: "Media Relations",
    image: "/assets/images/pharma_hero_lab.png",
    summary: "State-of-the-art facility to focus on next-generation biologicals and targeted therapies.",
    content: "Plexus Pharmaco is expanding its European footprint with a new €50M Research & Development center in Munich. The facility will employ over 200 leading scientists dedicated to advancing treatments in oncology and rare diseases. [PENDING CLIENT APPROVAL]"
  },
  {
    id: "sustainability-milestone-2026",
    title: "Achieving 100% Renewable Energy Across Manufacturing",
    date: "Jun 10, 2026",
    category: "Sustainability",
    author: "Corporate Comms",
    image: "/assets/images/pharma_hero_mfg.png",
    summary: "All global manufacturing sites now operate on 100% renewable energy sources.",
    content: "In a major step towards our net-zero goals, Plexus Pharmaco proudly announces that all active manufacturing facilities globally have fully transitioned to 100% renewable energy. This milestone reflects our unwavering commitment to environmental sustainability. [PENDING CLIENT APPROVAL]"
  },
  {
    id: "q2-financial-results",
    title: "Q2 2026 Financial Results Highlight Strong European Growth",
    date: "May 05, 2026",
    category: "Financial",
    author: "Investor Relations",
    image: "/assets/images/pharma_hero_corporate.png",
    summary: "Record-breaking quarter driven by robust performance in the Dermo-cosmetics division.",
    content: "Plexus Pharmaco reported exceptional Q2 financial results, with European revenue growing by 24% year-over-year. The strong performance was spearheaded by our newly launched Dermo-cosmetics line and expanded cardiovascular portfolio. [PENDING CLIENT APPROVAL]"
  }
];
