"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Détails de l'Offre Pack Standard</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/85 p-8 rounded-2xl shadow-xl border border-quaternary/30 mb-8">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-quaternary-rgb), 0.3);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-quaternary">Tarif : 700-850€ TTC</h3>
            <p className="text-gray-200 mb-6">
              Notre offre Pack Standard est conçue pour les entreprises souhaitant un site vitrine complet de 5 pages pour une présentation détaillée de leur activité. Une solution parfaite pour une présence en ligne professionnelle et étoffée.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-quaternary">Ce qui est inclus :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> 5 pages : Accueil, Services, À propos, FAQ/Galerie statique, Contact</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> Design sur mesure et responsive (mobile et desktop)</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> 1 aller-retour de correction inclus</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> Délai de livraison : 7-10 jours ouvrés</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-quaternary">Options supplémentaires :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-quaternary mr-2">Sur devis</span> Pages supplémentaires</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">Sur devis</span> Optimisation SEO basique</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">Sur devis</span> Intégration Google Maps</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">Sur devis</span> Nom de domaine personnalisé</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">Note</span> Galerie statique possible, pas de CMS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-primary/75 p-8 rounded-2xl shadow-xl border border-quaternary/20">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-quaternary-rgb), 0.2);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-quaternary">Pourquoi Choisir Pack Standard ?</h3>
            <p className="text-gray-200 mb-6">
              Cette offre est idéale pour une présence en ligne détaillée avec un site vitrine de 5 pages. Nous créons une solution professionnelle qui met en valeur votre activité avec une structure complète.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-quaternary font-bold mr-3 text-xl">1.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Présentation Complète</h4>
                  <p className="text-gray-200">Un site de 5 pages pour couvrir tous les aspects de votre activité, de vos services à vos contacts.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-quaternary font-bold mr-3 text-xl">2.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Design Professionnel</h4>
                  <p className="text-gray-200">Un design sur mesure avec un aller-retour de correction pour refléter parfaitement votre image.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-quaternary font-bold mr-3 text-xl">3.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Structure Étoffée</h4>
                  <p className="text-gray-200">Inclut des pages comme FAQ ou Galerie statique pour une communication plus riche avec vos clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
