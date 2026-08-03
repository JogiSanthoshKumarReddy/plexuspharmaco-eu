import HeroSection from "@/components/home/HeroSection";
import CompanyStats from "@/components/home/CompanyStats";
import CompanyHighlights from "@/components/home/CompanyHighlights";
import GlobalPresenceMap from "@/components/home/GlobalPresenceMap";
import UniqueSellingPoints from "@/components/home/UniqueSellingPoints";
import FAQSection from "@/components/home/FAQSection";
import ModernTestimonials from "@/components/home/ModernTestimonials";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="modern-page-wrapper">
      <HeroSection />
      <CompanyStats />
      <CompanyHighlights />
      <GlobalPresenceMap />
      <UniqueSellingPoints />
      <ModernTestimonials />
      <FAQSection />
      <CallToAction />
    </div>
  );
}
