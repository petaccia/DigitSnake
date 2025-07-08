"use client";

import HeroSection from "@/components/common/HeroSection";

export default function FormationSeniorsHeroSection() {
  return (
    <HeroSection
      title="Formation Informatique pour Seniors"
      description="Accompagnement personnalisé pour seniors afin de maîtriser l'informatique, les smartphones et internet, dans une approche patiente et adaptée."
      backgroundImage="/services/formation-senior.jpg"
      badgeText="Service professionnel"
      primaryButtonText="Réserver une formation"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
      accentColor="#9b59b6" // Violet for seniors
    />
  );
}
