import HeroSection from "@/components/page/services/web/onepage-express/HeroSection";
import DetailsSection from "@/components/page/services/web/onepage-express/DetailsSection";
import CTASection from "@/components/page/services/web/CTASection";

export default function OnePageExpressPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
