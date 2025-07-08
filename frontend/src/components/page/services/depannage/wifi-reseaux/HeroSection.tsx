"use client";

import HeroSection from "@/components/common/HeroSection";

export default function WifiReseauxHeroSection() {
  return (
    <HeroSection
      title="Installation et Sécurisation de Réseaux Wi-Fi"
      description="Configuration professionnelle de réseaux sans fil pour une connexion fiable, sécurisée et optimisée dans votre domicile ou entreprise."
      backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Améliorer mon réseau"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
    />
  );
}
