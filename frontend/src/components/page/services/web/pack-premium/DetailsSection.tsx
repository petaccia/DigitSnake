"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Détails du Pack Premium</h2>
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary/85 p-8 rounded-2xl shadow-xl border border-octonary/30 mb-8">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-octonary-rgb), 0.3);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-octonary">Tarif : À partir de 1500€ TTC</h3>
            <p className="text-gray-200 mb-6">
              Le Pack Premium est une solution sur mesure pour les entreprises ayant des besoins complexes, comme des sites multi-pages ou des fonctionnalités spécifiques. Chaque projet est évalué individuellement pour un devis personnalisé.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-octonary">Ce qui est inclus :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-octonary mr-2">✓</span> Nombre de pages selon vos besoins (minimum 5)</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">✓</span> Design haut de gamme et responsive</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">✓</span> Fonctionnalités avancées (blog, e-commerce de base, etc.)</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">✓</span> 3 allers-retours de corrections inclus</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">✓</span> Délai de livraison : 15 à 20 jours ouvrés</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-octonary">Options supplémentaires :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-octonary mr-2">+ Sur devis</span> Intégration de fonctionnalités complexes (paiements, réservations)</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">+ Sur devis</span> Création de contenu premium (textes, visuels)</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">+ Sur devis</span> Stratégie SEO complète et marketing digital</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-primary/75 p-8 rounded-2xl shadow-xl border border-octonary/20">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-octonary-rgb), 0.2);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-octonary">Pourquoi Choisir le Pack Premium ?</h3>
            <p className="text-gray-200 mb-6">
              Ce pack est idéal pour les projets ambitieux nécessitant une approche personnalisée. Nous travaillons en étroite collaboration avec vous pour créer un site qui répond parfaitement à vos attentes et objectifs.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-octonary font-bold mr-3 text-xl">1.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Solution Sur Mesure</h4>
                  <p className="text-gray-200">Un site adapté à vos besoins spécifiques, sans limites prédéfinies.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-octonary font-bold mr-3 text-xl">2.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Design Haut de Gamme</h4>
                  <p className="text-gray-200">Une esthétique soignée pour démarquer votre marque.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-octonary font-bold mr-3 text-xl">3.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Accompagnement Personnalisé</h4>
                  <p className="text-gray-200">Un suivi rapproché pour garantir votre satisfaction à chaque étape.</p>
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
