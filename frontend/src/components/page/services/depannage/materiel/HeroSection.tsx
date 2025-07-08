"use client";

import HeroSection from "@/components/common/HeroSection";

export default function MaterielHeroSection() {
  return (
    <HeroSection
      title="Vente de Matériel Informatique"
      description="Vente d'ordinateurs et composants reconditionnés ou neufs, adaptés à vos besoins personnels ou professionnels."
      backgroundImage="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Demander un devis"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
      accentColor="#2980b9" // Blue for hardware as per user request
    />
  );
}
