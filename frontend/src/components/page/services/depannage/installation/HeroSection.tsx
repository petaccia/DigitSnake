"use client";

import HeroSection from "@/components/common/HeroSection";

export default function InstallationHeroSection() {
  return (
    <HeroSection
      title="Installation de Logiciels et Systèmes"
      description="Installation et configuration de systèmes d'exploitation, logiciels et pilotes pour un fonctionnement optimal de vos équipements informatiques."
      backgroundImage="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Demander une installation"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
      accentColor="#27ae60" // Green for software
    />
  );
}
