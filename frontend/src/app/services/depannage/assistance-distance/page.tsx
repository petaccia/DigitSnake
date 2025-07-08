"use client";

import HeroSection from "@/components/page/services/depannage/assistance-distance/HeroSection";
import DetailsSection from "@/components/page/services/depannage/assistance-distance/DetailsSection";
import CTASection from "@/components/page/services/depannage/CTASection";

export default function AssistanceDistancePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
