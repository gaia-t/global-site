import HeroSection from "./cofit/HeroSection";
import HowItWorksSection from "./cofit/HowItWorksSection";
import ResultsSection from "./cofit/ResultsSection";
import SolutionsSection from "./cofit/SolutionsSection";
import ExpertsSection from "./cofit/ExpertsSection";
import FootprintSection from "./cofit/FootprintSection";
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
      <HeroSection />
      <HowItWorksSection />
      <ResultsSection />
      <SolutionsSection />
      <ExpertsSection />
      <FootprintSection />
      <ClosingSection />
    </div>
  );
}
