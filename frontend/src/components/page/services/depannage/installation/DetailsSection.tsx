"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">Détails du Service d'Installation</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
          <p>
            Notre service d'installation vous accompagne dans la mise en place de vos systèmes informatiques, qu'il s'agisse de nouveaux équipements ou de réinstallations après une panne.
          </p>
          <div className="space-y-4">
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Installation d'OS (Windows, Ubuntu)</h3>
              <p className="text-gray-300">Installation et configuration de systèmes d'exploitation adaptés à vos besoins, avec tous les pilotes nécessaires pour un fonctionnement fluide.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Configuration de logiciels</h3>
              <p className="text-gray-300">Installation et paramétrage de logiciels spécifiques (bureautique, graphisme, etc.) pour une utilisation immédiate.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Mise en place d'antivirus</h3>
              <p className="text-gray-300">Installation de solutions de sécurité pour protéger vos données contre les virus, malwares et autres menaces numériques.</p>
            </div>
          </div>
          <p>
            Que vous ayez besoin d'une installation complète après l'achat d'un nouvel ordinateur ou d'une mise à jour de votre système existant, nous assurons un service rapide et fiable.
          </p>
        </div>
        <div className="mt-12 bg-blue-900/30 rounded-2xl p-6 md:p-8 border border-blue-700 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-blue-300">Tarification</h3>
          <p className="text-blue-200">
            Les installations sont facturées au forfait, à partir de 60€ HT pour une installation standard d'OS et de logiciels de base. Des frais supplémentaires peuvent s'appliquer pour des configurations complexes.
          </p>
        </div>
      </div>
    </section>
  );
}
