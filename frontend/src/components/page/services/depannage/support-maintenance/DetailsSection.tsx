"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">Détails du Service de Support et Maintenance</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
          <p>
            Notre service de support et maintenance est conçu pour identifier et résoudre rapidement les problèmes affectant vos équipements informatiques, qu'il s'agisse de matériel ou de logiciels.
          </p>
          <div className="space-y-4">
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Diagnostic précis des pannes</h3>
              <p className="text-gray-300">Nous utilisons des outils avancés pour identifier la source exacte de vos problèmes, qu'ils soient matériels (disque dur, carte mère) ou logiciels (bugs, virus).</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Réparation matériel et logiciel</h3>
              <p className="text-gray-300">Réparation ou remplacement de composants défectueux, et résolution de problèmes logiciels pour restaurer la fonctionnalité de vos systèmes.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Optimisation et maintenance préventive</h3>
              <p className="text-gray-300">Nettoyage physique et logiciel, mises à jour, et conseils pour éviter les pannes futures et prolonger la durée de vie de vos équipements.</p>
            </div>
          </div>
          <p>
            Que vous ayez un ordinateur qui ne démarre plus, des lenteurs inhabituelles ou des messages d'erreur, notre expertise garantit une solution adaptée à vos besoins.
          </p>
        </div>
        <div className="mt-12 bg-blue-900/30 rounded-2xl p-6 md:p-8 border border-blue-700 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-blue-300">Tarification</h3>
          <p className="text-blue-200">
            Nos tarifs sont transparents et compétitifs, avec un diagnostic initial souvent gratuit. Les interventions sont facturées à l'heure ou au forfait selon la complexité, à partir de 50€ HT/heure.
          </p>
        </div>
      </div>
    </section>
  );
}
