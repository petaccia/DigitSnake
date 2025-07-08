"use client";

import HeroSection from "@/components/common/HeroSection";

export default function WifiReseauxHeroSection() {
  return (
    <HeroSection
      title="Dépannage WiFi et Réseaux"
      description="Résolution de problèmes de connexion, optimisation de la couverture WiFi et configuration de réseaux sécurisés pour particuliers et entreprises."
      backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Résoudre mon problème réseau"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
      accentColor="#e74c3c" // Red for network as per user request
    />
  );
}
