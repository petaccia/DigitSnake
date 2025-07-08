"use client";

import HeroSection from "@/components/common/HeroSection";

export default function InstallationHeroSection() {
  return (
    <HeroSection
      title="Installation de Logiciels et Systèmes"
      description="Installation et configuration de systèmes d'exploitation, logiciels et pilotes pour un fonctionnement optimal de vos équipements informatiques."
      backgroundImage="/services/logiciel.jpg"
      badgeText="Service professionnel"
      primaryButtonText="Demander une installation"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
      accentColor="#27ae60" // Green for software
    />
  );
}
