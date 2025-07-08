"use client";

import HeroSection from "@/components/page/services/depannage/materiel/HeroSection";
import DetailsSection from "@/components/page/services/depannage/materiel/DetailsSection";
import CTASection from "@/components/page/services/depannage/CTASection";

export default function MaterielPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
