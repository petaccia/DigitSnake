"use client";

import HeroSection from "@/components/common/HeroSection";

export default function WifiReseauxHeroSection() {
  return (
    <HeroSection
      title="Dépannage WiFi et Réseaux"
      description="Résolution de problèmes de connexion, optimisation de la couverture WiFi et configuration de réseaux sécurisés pour particuliers et entreprises."
      backgroundImage="/services/wifi.jpg"
      badgeText="Service professionnel"
      primaryButtonText="Résoudre mon problème réseau"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
      accentColor="#e74c3c" // Red for network as per user request
    />
  );
}
