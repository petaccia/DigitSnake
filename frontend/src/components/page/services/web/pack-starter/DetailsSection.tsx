"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Détails du Pack Starter</h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary/85 p-8 rounded-2xl shadow-xl border border-senary/30 mb-8">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-senary-rgb), 0.3);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-senary">Tarif : À partir de 450€ TTC</h3>
            <p className="text-gray-200 mb-6">
              Le Pack Starter est conçu pour les entreprises ou professionnels souhaitant une présence en ligne professionnelle avec un site de 3 pages. Une solution abordable pour présenter votre activité de manière claire et efficace.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-senary">Ce qui est inclus :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-start"><span className="text-senary mr-2 mt-1">✓</span> 3 pages (Accueil, À Propos, Contact)</li>
                  <li className="flex items-start"><span className="text-senary mr-2 mt-1">✓</span> Design responsive et personnalisé</li>
                  <li className="flex items-start"><span className="text-senary mr-2 mt-1">✓</span> Intégration de contenu de base</li>
                  <li className="flex items-start"><span className="text-senary mr-2 mt-1">✓</span> 2 allers-retours de corrections inclus</li>
                  <li className="flex items-start"><span className="text-senary mr-2 mt-1">✓</span> Délai de livraison : 5 à 7 jours ouvrés</li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-semibold mb-3 text-senary">Options supplémentaires :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-start"><span className="text-senary mr-2 mt-1">+ 150€</span> Création de contenu textuel personnalisé</li>
                  <li className="flex items-start"><span className="text-senary mr-2 mt-1">+ 100€</span> Création de logo ou éléments graphiques simples</li>
                  <li className="flex items-start"><span className="text-senary mr-2 mt-1">+ 200€</span> Optimisation SEO avancée</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-primary/75 p-8 rounded-2xl shadow-xl border border-senary/20">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-senary-rgb), 0.2);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-senary">Pourquoi Choisir le Pack Starter ?</h3>
            <p className="text-gray-200 mb-6">
              Ce pack offre un excellent rapport qualité-prix pour un site vitrine de base. Il est idéal pour établir une présence en ligne professionnelle sans investissement important.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-senary font-bold mr-3 text-xl">1.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Structure Claire</h4>
                  <p className="text-gray-200">Trois pages pour couvrir les essentiels de votre activité.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-senary font-bold mr-3 text-xl">2.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Design Personnalisé</h4>
                  <p className="text-gray-200">Un design adapté à votre identité visuelle.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-senary font-bold mr-3 text-xl">3.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Livraison Rapide</h4>
                  <p className="text-gray-200">Votre site prêt en 5 à 7 jours ouvrés pour une mise en ligne rapide.</p>
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
