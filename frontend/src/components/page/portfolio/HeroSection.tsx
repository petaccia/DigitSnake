"use client";

import HeroSection from "@/components/common/HeroSection";

export default function PortfolioHeroSection() {
  return (
    <HeroSection
      title="Notre Portfolio"
      description="Découvrez nos réalisations et projets récents"
      backgroundImage="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Nos réalisations"
      primaryButtonText="Voir nos projets"
      primaryButtonLink="#projects"
      secondaryButtonText=""
      secondaryButtonLink=""
    />
  );
}
