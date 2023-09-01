import { Hero } from "./components/Hero/Hero";
import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { ReportsBenefitSection } from "./components/ReportsBenefitSection/ReportsBenefitSection";

export const HomePage = () => {
  return (
    <main>
      <Hero />

      <BenefitsSection />

      <ReportsBenefitSection />
    </main>
  );
};
