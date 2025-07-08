"use client";

import HeroSection from "@/components/common/HeroSection";

export default function InstallationHeroSection() {
  return (
    <HeroSection
      title="Installation de Systèmes et Logiciels"
      description="Mise en place professionnelle de systèmes d'exploitation, logiciels et protections antivirus pour un fonctionnement optimal."
      backgroundImage="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Demander une installation"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
    />
  );
}
