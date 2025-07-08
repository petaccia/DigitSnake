"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">Détails de l'Assistance à Distance</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
          <p>
            Notre service d'assistance à distance vous permet de résoudre vos problèmes informatiques sans avoir à vous déplacer ou à recevoir un technicien chez vous, grâce à une connexion sécurisée.
          </p>
          <div className="space-y-4">
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Diagnostic via connexion sécurisée</h3>
              <p className="text-gray-300">Connexion à votre ordinateur à distance avec des outils sécurisés pour identifier les problèmes en temps réel.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Résolution de problèmes logiciels</h3>
              <p className="text-gray-300">Correction de bugs, suppression de virus, mise à jour de logiciels ou résolution de problèmes de configuration directement sur votre machine.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Conseils en direct</h3>
              <p className="text-gray-300">Accompagnement vocal ou par chat pour vous guider dans l'utilisation de votre ordinateur ou pour des conseils spécifiques.</p>
            </div>
          </div>
          <p>
            Ce service est idéal pour des problèmes logiciels mineurs ou des configurations rapides, offrant une solution pratique et immédiate sans frais de déplacement.
          </p>
        </div>
        <div className="mt-12 bg-blue-900/30 rounded-2xl p-6 md:p-8 border border-blue-700 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-blue-300">Tarification</h3>
          <p className="text-blue-200">
            L'assistance à distance est facturée à la demi-heure, à partir de 30€ HT pour une intervention de base. Des forfaits sont disponibles pour des besoins réguliers.
          </p>
        </div>
      </div>
    </section>
  );
}
