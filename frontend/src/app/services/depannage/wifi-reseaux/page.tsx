"use client";

import HeroSection from "@/components/page/services/depannage/wifi-reseaux/HeroSection";
import DetailsSection from "@/components/page/services/depannage/wifi-reseaux/DetailsSection";
import CTASection from "@/components/page/services/depannage/CTASection";

export default function WifiReseauxPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
