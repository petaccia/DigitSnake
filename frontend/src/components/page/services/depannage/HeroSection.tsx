"use client";

import HeroSection from "@/components/common/HeroSection";

export default function DepannageHeroSection() {
  return (
    <HeroSection
      title="Services de Dépannage Informatique"
      description="Solutions rapides et efficaces pour tous vos problèmes informatiques : ordinateur, réseau ou logiciels."
      backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Découvrir nos offres"
      primaryButtonLink="#details"
      secondaryButtonText="Demander une intervention"
      secondaryButtonLink="#contact"
    />
  );
}
