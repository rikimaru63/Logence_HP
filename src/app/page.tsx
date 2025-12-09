import {
  HeroSection,
  ServiceOutlineSection,
  PainPointsSection,
  SolutionsSection,
  ProcessSection,
  StatsSection,
  WhyUsSection,
  NewsSection,
  CTASection,
} from "@/components/home";

export default function HomePage() {
  return (
    <main>
      {/* bg-slate-50 */}
      <HeroSection />
      {/* bg-white */}
      <ServiceOutlineSection />
      {/* bg-slate-50 */}
      <PainPointsSection />
      {/* bg-white */}
      <SolutionsSection />
      {/* bg-slate-50 */}
      <ProcessSection />
      {/* bg-slate-900 (dark) */}
      <StatsSection />
      {/* bg-white */}
      <WhyUsSection />
      {/* bg-slate-50 */}
      <NewsSection />
      {/* bg-white */}
      <CTASection />
    </main>
  );
}
