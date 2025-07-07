import HeroSection from "@/components/page/services/web/full-stack/HeroSection";
import DetailsSection from "@/components/page/services/web/full-stack/DetailsSection";
import CTASection from "@/components/page/services/web/CTASection";

export default function FullStackPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
