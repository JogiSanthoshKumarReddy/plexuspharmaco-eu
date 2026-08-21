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
    title: "Welcome to Plexuspharmaco Europe",
    date: "Aug 15, 2026",
    category: "Corporate News",
    author: "Corporate Comms",
    image: "/assets/images/pharma_hero_corporate.png",
    summary: "Welcome to the official news portal of Plexuspharmaco Europe.",
    content: "Welcome to the official news portal of Plexuspharmaco Europe. We are committed to transparency, compliance, and excellence in healthcare. Please check back later for official announcements, regulatory updates, and corporate milestones. [PENDING CLIENT APPROVAL]"
  }
];
