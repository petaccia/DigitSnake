import CTASection from "@/components/page/home/CTASection";
import DetailsSection from "@/components/page/services/web/DetailsSection";
import HeroSection from "@/components/page/services/web/HeroSection";

export default function WebServices() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Details Section */}
        <DetailsSection />

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
}
