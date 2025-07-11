"use client";

import HeroSection from "@/components/page/services/depannage/formation-seniors/HeroSection";
import DetailsSection from "@/components/page/services/depannage/formation-seniors/DetailsSection";
import CTASection from "@/components/page/services/depannage/formation-seniors/CTASection";

export default function FormationSeniorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
