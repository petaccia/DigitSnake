"use client";

import HeroSection from "@/components/common/HeroSection";

export default function DevisHeroSection() {
  return (
    <HeroSection
      title="Demandez un Devis"
      description="Obtenez une estimation personnalisée pour vos projets de création web, dépannage informatique ou formation seniors."
      backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      badgeText="Devis Gratuit"
      primaryButtonText="Commencer"
      primaryButtonLink="#devis-form"
      secondaryButtonText=""
      secondaryButtonLink=""
    />
  );
}