"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Détails du Pack Standard</h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary/85 p-8 rounded-2xl shadow-xl border border-quinary/30 mb-8">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-quinary-rgb), 0.3);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-quinary">Tarif : A partir de 950€ TTC</h3>
            <p className="text-gray-200 mb-6">
              Le Pack Standard est idéal pour les entreprises souhaitant un site vitrine complet de 5 pages. Une solution parfaite pour une présentation détaillée de votre activité avec un design professionnel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-quinary">Ce qui est inclus :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-quinary mr-2">✓</span> 5 pages (Accueil, Services, À Propos, FAQ/Galerie statique, Contact)</li>
                  <li className="flex items-center"><span className="text-quinary mr-2">✓</span> Design responsive et personnalisé</li>
                  <li className="flex items-center"><span className="text-quinary mr-2">✓</span> Intégration de contenu fourni</li>
                  <li className="flex items-center"><span className="text-quinary mr-2">✓</span> 2 allers-retours de corrections inclus</li>
                  <li className="flex items-center"><span className="text-quinary mr-2">✓</span> Délai de livraison : 7 à 10 jours ouvrés</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-quinary">Options supplémentaires :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-quinary mr-2">+ 200€</span> Création de contenu textuel personnalisé</li>
                  <li className="flex items-center"><span className="text-quinary mr-2">+ 150€</span> Création de logo ou éléments graphiques</li>
                  <li className="flex items-center"><span className="text-quinary mr-2">+ 250€</span> Optimisation SEO avancée avec analyse de mots-clés</li>
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
            <h3 className="text-2xl font-bold mb-4 text-quinary">Pourquoi Choisir le Pack Standard ?</h3>
            <p className="text-gray-200 mb-6">
              Ce pack est conçu pour offrir une présence en ligne complète et professionnelle. Avec 5 pages, vous pouvez détailler vos services et renforcer votre crédibilité auprès de vos clients.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-quinary font-bold mr-3 text-xl">1.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Présentation Complète</h4>
                  <p className="text-gray-200">Cinq pages pour une couverture détaillée de votre activité.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-quinary font-bold mr-3 text-xl">2.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Design Professionnel</h4>
                  <p className="text-gray-200">Un design sur mesure qui reflète votre marque.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-quinary font-bold mr-3 text-xl">3.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Livraison Efficace</h4>
                  <p className="text-gray-200">Votre site prêt en 7 à 10 jours ouvrés pour une mise en ligne sans délai excessif.</p>
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
