"use client";

import Card from "@/components/page/services/web/Card";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="details">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Nos Offres de Dépannage Informatique</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card
            title="Intervention Rapide"
            description="Résolution de problèmes informatiques de base à distance ou sur site (selon localisation)."
            features={[
              "Diagnostic et réparation de pannes simples",
              "Nettoyage de virus/malwares de base",
              "Configuration logicielle"
            ]}
            link="#contact"
            accentColor="senary"
          />
          <Card
            title="Forfait Réparation"
            description="Réparation complète pour des problèmes complexes nécessitant plusieurs heures de travail."
            features={[
              "Réparation de pannes matérielles/logicielles",
              "Réinstallation système d'exploitation",
              "Récupération de données (si possible)"
            ]}
            link="#contact"
            accentColor="tertiary"
           
          />
          <Card
            title="Contrat de Maintenance"
            description="Support technique continu pour les entreprises ou particuliers avec des besoins réguliers."
            features={[
              "Maintenance préventive mensuelle",
              "Support prioritaire (téléphonique/distant)",
              "Interventions sur site incluses (selon contrat)"
            ]}
            link="#contact"
            accentColor="octonary"
          />
        </div>
        <div className="mt-12 bg-yellow-50 rounded-2xl p-6 md:p-8 border border-yellow-200 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-yellow-800">Note Importante (Travail Solo)</h3>
          <p className="text-yellow-700">
            En tant que travailleur indépendant, je m'engage à offrir une attention exclusive à chaque projet. Cependant, je travaille uniquement pendant les jours ouvrés, sans disponibilité 24/7 ou pour des urgences soir/week-end. Les délais et interventions sont garantis en jours ouvrés uniquement pour assurer une qualité optimale.
          </p>
        </div>
      </div>
    </section>
  );
}
