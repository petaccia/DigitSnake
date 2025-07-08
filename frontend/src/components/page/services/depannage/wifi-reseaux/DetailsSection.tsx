"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">Détails du Service Wi-Fi et Réseaux</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
          <p>
            Notre service de configuration et de sécurisation des réseaux Wi-Fi garantit une connexion stable et protégée, adaptée à vos besoins spécifiques, que ce soit pour un usage domestique ou professionnel.
          </p>
          <div className="space-y-4">
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Configuration de réseaux sans fil</h3>
              <p className="text-gray-300">Installation et réglage de routeurs, points d'accès et répéteurs pour assurer une couverture Wi-Fi complète et performante.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Sécurisation contre les intrusions</h3>
              <p className="text-gray-300">Mise en place de protocoles de sécurité avancés (WPA3, mots de passe forts, pare-feu) pour protéger votre réseau des accès non autorisés.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Optimisation de la couverture</h3>
              <p className="text-gray-300">Analyse et ajustement pour éliminer les zones mortes et améliorer la vitesse et la stabilité de votre connexion Wi-Fi.</p>
            </div>
          </div>
          <p>
            Que vous ayez des problèmes de connexion intermittente, une couverture insuffisante ou des inquiétudes concernant la sécurité de votre réseau, nous offrons des solutions sur mesure.
          </p>
        </div>
        <div className="mt-12 bg-blue-900/30 rounded-2xl p-6 md:p-8 border border-blue-700 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-blue-300">Tarification</h3>
          <p className="text-blue-200">
            La configuration de base d'un réseau Wi-Fi commence à 70€ HT, avec des frais supplémentaires pour des installations complexes ou des équipements additionnels. Devis personnalisé sur demande.
          </p>
        </div>
      </div>
    </section>
  );
}
