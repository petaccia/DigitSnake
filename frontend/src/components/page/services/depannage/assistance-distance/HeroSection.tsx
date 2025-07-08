"use client";

import HeroSection from "@/components/common/HeroSection";

export default function AssistanceDistanceHeroSection() {
  return (
    <HeroSection
      title="Assistance Informatique à Distance"
      description="Support technique à distance pour résoudre vos problèmes informatiques rapidement via internet, sans besoin de déplacement."
      backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Obtenir de l'aide maintenant"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
      accentColor="#1abc9c" // Turquoise for support
    />
  );
}
