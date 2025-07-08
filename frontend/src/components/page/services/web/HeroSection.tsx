"use client";

import HeroSection from "@/components/common/HeroSection";

export default function WebHeroSection() {
  return (
    <HeroSection
      title="Services de Développement Web"
      description="Création de sites web sur mesure, optimisation et maintenance pour une présence en ligne performante."
      backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Découvrir nos offres"
      primaryButtonLink="#details"
      secondaryButtonText="Demander un devis"
      secondaryButtonLink="#contact"
    />
  );
}
