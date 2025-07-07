import HeroSection from "@/components/page/services/web/pack-starter/HeroSection";
import DetailsSection from "@/components/page/services/web/pack-starter/DetailsSection";
import CTASection from "@/components/page/services/web/CTASection";

export default function PackStarterPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
