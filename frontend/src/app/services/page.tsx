import HeroSection from "@/components/page/services/depannage/HeroSection";
import DetailsSection from "@/components/page/services/depannage/DetailsSection";
import CTASection from "@/components/page/services/depannage/CTASection";

export default function DepannageServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
