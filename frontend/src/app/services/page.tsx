import HeroSection from "@/components/page/services/HeroSection";
import DetailsSection from "@/components/page/services/depannage/DetailsSection";
import CTASection from "@/components/page/services/depannage/CTASection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
