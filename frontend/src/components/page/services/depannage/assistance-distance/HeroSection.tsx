"use client";

import HeroSection from "@/components/common/HeroSection";

export default function AssistanceDistanceHeroSection() {
  return (
    <HeroSection
      title="Assistance Informatique à Distance"
      description="Support technique rapide et efficace sans déplacement, pour résoudre vos problèmes directement depuis chez vous."
      backgroundImage="https://images.unsplash.com/photo-1584697964151-3c55b20552b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service pratique"
      primaryButtonText="Demander une assistance"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
    />
  );
}
