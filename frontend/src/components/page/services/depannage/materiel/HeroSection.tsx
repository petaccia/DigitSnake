"use client";

import HeroSection from "@/components/common/HeroSection";

export default function MaterielHeroSection() {
  return (
    <HeroSection
      title="Vente et Assemblage de Matériel Informatique"
      description="Solutions sur mesure pour l'achat et l'assemblage de matériel informatique, neuf ou reconditionné, selon vos besoins et votre budget."
      backgroundImage="https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Service professionnel"
      primaryButtonText="Demander un devis"
      primaryButtonLink="#contact"
      secondaryButtonText="Retour aux services"
      secondaryButtonLink="/services/depannage"
    />
  );
}
