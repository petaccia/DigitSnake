"use client";

import HeroSection from "@/components/common/HeroSection";

export default function MaterielHeroSection() {
  return (
    <HeroSection
      title="Vente de Matériel Informatique"
      description="Vente d'ordinateurs et composants reconditionnés ou neufs, adaptés à vos besoins personnels ou professionnels."
      backgroundImage="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Demander un devis"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
      accentColor="#2980b9" // Blue for hardware as per user request
    />
  );
}
