"use client";

import HeroSection from "@/components/page/services/depannage/support-maintenance/HeroSection";
import DetailsSection from "@/components/page/services/depannage/support-maintenance/DetailsSection";
import CTASection from "@/components/page/services/depannage/CTASection";

export default function SupportMaintenancePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DetailsSection />
      <CTASection />
    </main>
  );
}
