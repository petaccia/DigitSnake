// frontend/src/components/page/contact/HeroSection.tsx

"use client";

import HeroSection from "@/components/common/HeroSection";

export default function ContactHeroSection() {
  return (
    <HeroSection
      title="Contactez-nous"
      description="Une question, un projet ou besoin d’assistance ? Remplissez le formulaire ou utilisez nos coordonnées pour nous joindre. Notre équipe vous répondra dans les meilleurs délais."
      backgroundImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80"
      badgeText="Contact"
      primaryButtonText="Nous écrire"
      primaryButtonLink="#contact-form"
      secondaryButtonText=""
      secondaryButtonLink=""
    />
  );
}