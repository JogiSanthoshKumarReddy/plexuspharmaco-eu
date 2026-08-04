"use client";
import { Suspense } from 'react';
import HeroSection from "@/components/home/HeroSection";
import CompanyStats from "@/components/home/CompanyStats";
import CompanyHighlights from "@/components/home/CompanyHighlights";
import GlobalPresenceMap from "@/components/home/GlobalPresenceMap";
import UniqueSellingPoints from "@/components/home/UniqueSellingPoints";
import FAQSection from "@/components/home/FAQSection";
import ModernTestimonials from "@/components/home/ModernTestimonials";
import CallToAction from "@/components/home/CallToAction";
import FeatureSection from "@/components/home/FeatureSection";
import GridSection from "@/components/home/GridSection";
import LatestNews from "@/components/home/LatestNews";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import { ShieldCheck, Heart, Leaf, Microscope, Globe2, Truck, TestTube, Lightbulb, Users, Award, Shield, FileCheck2 } from "lucide-react";

export default function Home() {
  const coreValues = [
    { icon: Heart, title: "Patient Centricity", description: "Our primary focus is improving patient outcomes globally through accessible and innovative healthcare therapies." },
    { icon: ShieldCheck, title: "Uncompromising Quality", description: "From API sourcing to final packaging, we adhere to the strictest WHO GMP and EU GMP standards without compromise." },
    { icon: Lightbulb, title: "Continuous Innovation", description: "We invest heavily in R&D to develop advanced formulations and novel drug delivery systems for tomorrow's challenges." },
    { icon: Globe2, title: "Global Accessibility", description: "Our robust supply chain and regulatory expertise ensure life-saving medicines reach patients across 50+ countries." },
    { icon: Users, title: "Collaboration & Trust", description: "We build enduring partnerships with healthcare professionals, distributors, and stakeholders based on absolute transparency." },
    { icon: Leaf, title: "Sustainable Practices", description: "We are committed to reducing our carbon footprint through eco-friendly manufacturing and green chemistry initiatives." }
  ];

  const businessDivisions = [
    { icon: TestTube, title: "Pharmaceuticals", description: "A comprehensive portfolio of life-saving therapeutics spanning oncology, cardiology, neurology, and infectious diseases." },
    { icon: Microscope, title: "Nutraceuticals", description: "Evidence-based dietary supplements and functional foods designed to support proactive health and wellness." },
    { icon: Truck, title: "Contract Manufacturing", description: "End-to-end CDMO services offering scalable, high-quality production capabilities for global pharmaceutical partners." }
  ];

  const certifications = [
    { icon: Shield, title: "WHO GMP Certified", description: "Our manufacturing facilities operate strictly under World Health Organization Good Manufacturing Practices." },
    { icon: FileCheck2, title: "ISO 9001:2015", description: "Internationally recognized standard ensuring that our products consistently meet customer and regulatory requirements." },
    { icon: Award, title: "EU GMP Compliance", description: "Stringent adherence to European Medicines Agency guidelines, enabling seamless export to highly regulated markets." }
  ];

  return (
    <div className="modern-page-wrapper">
      <HeroSection />
      
      {/* Company Introduction */}
      <FeatureSection 
        title="Advancing Global Healthcare Through Science and Empathy"
        subtitle="Who We Are"
        description="Plexuspharmaco is a premier European multinational pharmaceutical corporation dedicated to developing, manufacturing, and commercializing advanced healthcare solutions. With a legacy built on scientific excellence and unyielding quality standards, we are transforming the landscape of modern medicine. Our state-of-the-art facilities and world-class research hubs empower us to deliver accessible, life-saving therapies to millions of patients worldwide."
        image="/assets/images/ai/hero_slide_4.png"
        imageAlt="Plexuspharmaco Global Boardroom"
        linkText="Explore Our Legacy"
        linkHref="/about"
      />

      <UniqueSellingPoints />

      <GridSection 
        title="The Principles That Drive Our Mission"
        subtitle="Our Core Values"
        description="At the heart of Plexuspharmaco lies a deep-rooted commitment to ethical integrity, scientific rigor, and patient well-being."
        items={coreValues}
      />

      {/* Research & Innovation */}
      <FeatureSection 
        title="Pioneering Tomorrow's Therapies Today"
        subtitle="Research & Innovation"
        description="Our global network of R&D centers represents the pinnacle of pharmaceutical innovation. Equipped with cutting-edge analytical technologies and staffed by industry-leading scientists, we accelerate the discovery and development of novel chemical entities, complex generics, and advanced drug delivery systems. We bridge the gap between groundbreaking science and clinical application."
        image="/assets/images/ai/modern_pharma_lab.png"
        imageAlt="Modern Pharmaceutical Laboratory"
        linkText="Discover Our R&D Engine"
        linkHref="/research-development"
        reverse={true}
      />

      <GridSection 
        title="Strategic Business Verticals"
        subtitle="Our Expertise"
        description="Plexuspharmaco operates across multiple high-growth segments, delivering specialized solutions that address unmet medical needs globally."
        items={businessDivisions}
        columns={3}
      />

      {/* Manufacturing Excellence */}
      <FeatureSection 
        title="Unparalleled Manufacturing Infrastructure"
        subtitle="Manufacturing Excellence"
        description="Our manufacturing footprint spans across multiple continents, featuring fully automated, closed-loop production systems that ensure zero contamination and absolute precision. From high-potency active pharmaceutical ingredients (HPAPIs) to sterile injectables and solid oral dosages, our facilities are designed to meet and exceed the most stringent global regulatory standards."
        image="/assets/images/ai/manufacturing_1785826419695.png"
        imageAlt="Advanced Manufacturing Facility"
        linkText="View Our Capabilities"
        linkHref="/manufacture-capability"
      />

      <CompanyStats />
      
      <GlobalPresenceMap />

      {/* Quality Assurance */}
      <FeatureSection 
        title="Quality is Not Checked, It is Engineered"
        subtitle="Quality Assurance"
        description="Our philosophy of 'Quality by Design' (QbD) is embedded in every stage of our product lifecycle. From rigorous vendor qualification and raw material testing to real-time process monitoring and exhaustive finished product analysis, we leave absolutely nothing to chance. Every batch released bears the Plexuspharmaco seal of uncompromising safety and efficacy."
        image="/assets/images/ai/quality_control_1785826430290.png"
        imageAlt="Quality Control Testing"
        linkText="Read Our Quality Policy"
        linkHref="/quality-assurance"
        reverse={true}
      />

      <GridSection 
        title="Global Accreditations"
        subtitle="Certifications & Awards"
        description="Our unwavering dedication to excellence is recognized by the world's most authoritative regulatory bodies."
        items={certifications}
      />

      {/* CSR & Sustainability */}
      <FeatureSection 
        title="Healing the Planet, Uplifting Communities"
        subtitle="CSR & Sustainability"
        description="As a responsible global corporate citizen, we believe that human health is inextricably linked to planetary health. Our sustainability initiatives focus on green chemistry, aggressive carbon reduction targets, and zero-liquid discharge manufacturing. Simultaneously, our philanthropic arms run extensive community healthcare programs, providing free medical access and education to underserved populations."
        image="/assets/images/ai/csr_sustainability.png"
        imageAlt="Sustainable Green Manufacturing"
        linkText="Learn About Our Impact"
        linkHref="/sustainability"
      />

      <ModernTestimonials />
      <LatestNews />
      <FAQSection />
      <NewsletterCTA />
      <CallToAction />
    </div>
  );
}
