"use client";

import HeroSection from "@/components/page/services/depannage/installation/HeroSection";
import DetailsSection from "@/components/page/services/depannage/installation/DetailsSection";
import CTASection from "@/components/page/services/depannage/CTASection";

export default function InstallationPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
