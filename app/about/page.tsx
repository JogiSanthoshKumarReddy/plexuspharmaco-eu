import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import Certifications from "@/components/about/Certifications";
import CSRSection from "@/components/about/CSRSection";
import UniqueSellingPoints from "@/components/home/UniqueSellingPoints";

export default function AboutPage() {
  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen">
      <BreadcrumbHero 
        title="About Us"
        paths={[{ name: "Company" }, { name: "About Us" }]}
      />
      
      <CompanyOverview />
      <CompanyTimeline />
      <Certifications />
      <CSRSection />
      <LeadershipTeam />
      <UniqueSellingPoints />
    </div>
  );
}
