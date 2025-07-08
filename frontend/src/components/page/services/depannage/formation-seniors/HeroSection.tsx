"use client";

import HeroSection from "@/components/common/HeroSection";

export default function FormationSeniorsHeroSection() {
  return (
    <HeroSection
      title="Formation Informatique pour Seniors"
      description="Accompagnement personnalisé pour maîtriser les bases de l'informatique et du numérique, adapté au rythme de chacun."
      backgroundImage="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service adapté"
      primaryButtonText="Réserver une formation"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
    />
  );
}
