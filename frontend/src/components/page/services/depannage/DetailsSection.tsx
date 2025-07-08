"use client";

import Card from "@/components/common/Card";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="details">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Nos Offres de Dépannage Informatique</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Support et Maintenance"
            description="Diagnostic et résolution de problèmes matériels et logiciels pour vos équipements."
            features={[
              "Diagnostic précis des pannes",
              "Réparation matériel et logiciel",
              "Optimisation et maintenance préventive"
            ]}
            link="/services/depannage/support-maintenance"
            accentColor="hardware"
            theme="it"
          />
          <Card
            title="Installation"
            description="Mise en place de systèmes d'exploitation, logiciels et protections antivirus."
            features={[
              "Installation d'OS (Windows, Ubuntu)",
              "Configuration de logiciels",
              "Mise en place d'antivirus"
            ]}
            link="/services/depannage/installation"
            accentColor="software"
            theme="it"
          />
          <Card
            title="Matériel"
            description="Vente et assemblage de matériel informatique reconditionné ou neuf selon vos besoins."
            features={[
              "Conseils personnalisés",
              "Assemblage sur mesure",
              "Solutions reconditionnées écologiques"
            ]}
            link="/services/depannage/materiel"
            accentColor="network"
            theme="it"
          />
          <div className="md:col-span-3 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Wi-Fi et Réseaux"
            description="Installation et sécurisation de réseaux Wi-Fi pour une connexion fiable et protégée."
            features={[
              "Configuration de réseaux sans fil",
              "Sécurisation contre les intrusions",
              "Optimisation de la couverture"
            ]}
            link="/services/depannage/wifi-reseaux"
            accentColor="security"
            theme="it"
          />
          <Card
            title="Formation Seniors"
            description="Accompagnement individualisé pour maîtriser les bases de l'informatique et du numérique."
            features={[
              "Apprentissage bureautique et internet",
              "Sécurité en ligne",
              "Utilisation des réseaux sociaux"
            ]}
            link="/services/depannage/formation-seniors"
            accentColor="seniors"
            theme="it"
          />
          </div>
          </div>
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
