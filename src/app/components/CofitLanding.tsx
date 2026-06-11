import HeroSection from "./cofit/HeroSection";
import SolutionsSection from "./cofit/SolutionsSection";
import HowItWorksSection from "./cofit/HowItWorksSection";
import HormoneTypesSection from "./cofit/HormoneTypesSection";
import JourneySection from "./cofit/JourneySection";
import PricingSection from "./cofit/PricingSection";
import ConsultationSection from "./cofit/ConsultationSection";
import FootprintSection from "./cofit/FootprintSection";
import ResultsSection from "./cofit/ResultsSection";
import ExpertsSection from "./cofit/ExpertsSection";
import GuaranteeSection from "./cofit/GuaranteeSection";
import ClinicsSection from "./cofit/ClinicsSection";
import FAQSection from "./cofit/FAQSection";
import ClosingSection from "./cofit/ClosingSection";
import Header from "./cofit/Header";
import ScrollProgress from "./cofit/ScrollProgress";
import BackToTop from "./cofit/BackToTop";

export default function CofitLanding() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-primary)' }}>
      <ScrollProgress />
      <BackToTop />
      <Header />
      {/* Section 1: Hero */}
      <HeroSection />
      {/* Section 2: Why Weight Loss Fails */}
      <SolutionsSection />
      {/* Section 3: Real Success Stories */}
      <ResultsSection />
      {/* Section 4: Hormone Types (root cause first) */}
      <HormoneTypesSection />
      {/* Section 5: How We Help */}
      <HowItWorksSection />
      {/* Section 6: 8-Week Journey */}
      <JourneySection />
      {/* Section 7: Program Plans */}
      <PricingSection />
      {/* Section 8: 1-on-1 Consultation */}
      <ConsultationSection />
      {/* Section 9: Meet Our Experts */}
      <ExpertsSection />
      {/* Section 10: Social Proof Statistics */}
      <FootprintSection />
      {/* Section 11: Money-Back Guarantee */}
      <GuaranteeSection />
      {/* Section 12: Clinic Locations */}
      <ClinicsSection />
      {/* Section 13: FAQ */}
      <FAQSection />
      {/* Final CTA */}
      <ClosingSection />
    </div>
  );
}
