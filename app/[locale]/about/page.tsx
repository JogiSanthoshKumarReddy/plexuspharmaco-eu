import { Metadata } from "next";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import CompanyOverview from "@/components/about/CompanyOverview";

import Certifications from "@/components/about/Certifications";
import CSRSection from "@/components/about/CSRSection";
import UniqueSellingPoints from "@/components/home/UniqueSellingPoints";
import HistoryTimeline from "@/components/about/HistoryTimeline";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Plexuspharmaco, our history, mission, and commitment to global healthcare solutions.",
};

export default function AboutPage() {
  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen">
      <BreadcrumbHero 
        title="About Us"
        paths={[{ name: "Company" }, { name: "About Us" }]}
      />
      
      <CompanyOverview />
      <HistoryTimeline />
      <Certifications />
      <CSRSection />

      <UniqueSellingPoints />
    </div>
  );
}
