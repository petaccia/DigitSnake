import HeroSection from "@/components/page/services/web/pack-premium/HeroSection";
import DetailsSection from "@/components/page/services/web/pack-premium/DetailsSection";
import CTASection from "@/components/page/services/web/CTASection";

export default function PackPremiumPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
