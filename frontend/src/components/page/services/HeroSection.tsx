"use client";

import HeroSection from "@/components/common/HeroSection";

export default function ServicesHeroSection() {
  return (
    <HeroSection
      title="Nos services informatiques"
      description="Découvrez notre gamme complète de solutions informatiques pour particuliers et professionnels."
      backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Solutions complètes"
      primaryButtonText="Explorer nos services"
      primaryButtonLink="#details"
      secondaryButtonText="Contactez-nous"
      secondaryButtonLink="#contact"
    />
  );
}
