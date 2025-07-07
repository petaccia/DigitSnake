"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Détails de l'Offre OnePage Express</h2>
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary/85 p-8 rounded-2xl shadow-xl border border-quinary/30 mb-8">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-quinary-rgb), 0.3);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-quinary">Tarif : À partir de 300€ TTC</h3>
            <p className="text-gray-200 mb-6">
              Notre offre OnePage Express est une solution rapide pour une page vitrine simple, livrée en 72 heures (jours ouvrés). Idéal pour les indépendants, artistes, ou petites entreprises qui ont besoin d'une présence en ligne immédiate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-quinary">Ce qui est inclus :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-start"><span className="text-quinary mr-2 mt-1">✓</span> 1 page vitrine avec design responsive</li>
                  <li className="flex items-start"><span className="text-quinary mr-2 mt-1">✓</span> Sections clés (Accueil, Contact, etc.)</li>
                  <li className="flex items-start"><span className="text-quinary mr-2 mt-1">✓</span> 1 aller-retour de correction inclus</li>
                  <li className="flex items-start"><span className="text-quinary mr-2 mt-1">✓</span> Délai de livraison : 72 heures (jours ouvrés uniquement)</li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-semibold mb-3 text-quinary">Options supplémentaires :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-start"><span className="text-quinary mr-2 ">+ 80 €</span> Création de texte personnalisé</li>
                  <li className="flex items-start"><span className="text-quinary mr-2 ">+ 50 €</span> Création de logo simple (vectoriel) à partir de votre texte</li>
                  <li className="flex items-start"><span className="text-quinary mr-2 ">+ 100 €</span> Fourniture de photos ou intégration de vos propres photos</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-primary/75 p-8 rounded-2xl shadow-xl border border-quinary/20">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-quinary-rgb), 0.2);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-quinary">Pourquoi Choisir OnePage Express ?</h3>
            <p className="text-gray-200 mb-6">
              Cette offre est parfaite pour une mise en ligne ultra-rapide à un tarif compétitif. Nous livrons une page professionnelle en seulement 72 heures pour que vous puissiez vous concentrer sur votre activité.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-quinary font-bold mr-3 text-xl">1.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Livraison Express</h4>
                  <p className="text-gray-200">Votre site prêt en 72 heures, idéal pour des besoins urgents.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-quinary font-bold mr-3 text-xl">2.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Tarif Transparent</h4>
                  <p className="text-gray-200">Un prix fixe de 300€ TTC avec un aller-retour de correction inclus.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-quinary font-bold mr-3 text-xl">3.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Simplicité</h4>
                  <p className="text-gray-200">Une solution clé en main, sans complexité, pour une présence en ligne immédiate.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-yellow-50 rounded-2xl p-6 md:p-8 border border-yellow-200">
            <h3 className="text-xl font-bold mb-2 text-yellow-800">Note Importante (Travail Solo)</h3>
            <p className="text-yellow-700">
              En tant que travailleur indépendant, je m'engage à offrir une attention exclusive à chaque projet. Cependant, je travaille uniquement pendant les jours ouvrés, sans disponibilité 24/7 ou pour des urgences soir/week-end. Les délais sont garantis en jours ouvrés uniquement pour assurer une qualité optimale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
