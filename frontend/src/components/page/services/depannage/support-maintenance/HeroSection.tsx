"use client";

import HeroSection from "@/components/common/HeroSection";

export default function SupportMaintenanceHeroSection() {
  return (
    <HeroSection
      title="Support et Maintenance Informatique"
      description="Diagnostic et résolution de problèmes matériels et logiciels pour tous vos équipements, avec une approche professionnelle et rapide."
      backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Obtenir un diagnostic"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
    />
  );
}
