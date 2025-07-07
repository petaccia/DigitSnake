import HeroSection from "@/components/page/services/web/pack-standard/HeroSection";
import DetailsSection from "@/components/page/services/web/pack-standard/DetailsSection";
import CTASection from "@/components/page/services/web/CTASection";

export default function PackStandardPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
