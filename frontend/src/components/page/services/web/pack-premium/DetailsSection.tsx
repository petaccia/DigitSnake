"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Détails de l'Offre Pack Premium</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/85 p-8 rounded-2xl shadow-xl border border-quaternary/30 mb-8">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-quaternary-rgb), 0.3);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-quaternary">Tarif : 1,200-1,500€ TTC</h3>
            <p className="text-gray-200 mb-6">
              Notre offre Pack Premium est destinée aux entreprises souhaitant un site complet de 5+ pages avec des options avancées pour une présence digitale sophistiquée. Parfait pour ceux qui ont besoin de fonctionnalités spécifiques et d'un design sur mesure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-quaternary">Ce qui est inclus :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> 5+ pages selon vos besoins</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> Design sur mesure et responsive (mobile et desktop)</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> Optimisation SEO basique</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> Nom de domaine et email professionnel inclus</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> Formulaire avancé et intégration Google Maps</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> 1 aller-retour de correction inclus</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">✓</span> Délai de livraison : 10-15 jours ouvrés</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-quaternary">Options supplémentaires :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-quaternary mr-2">Sur devis</span> Fonctionnalités avancées (e-commerce, blog)</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">Sur devis</span> Pages supplémentaires</li>
                  <li className="flex items-center"><span className="text-quaternary mr-2">Note</span> Pas de CMS ni galerie dynamique dans cette offre</li>
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
            <h3 className="text-2xl font-bold mb-4 text-quaternary">Pourquoi Choisir Pack Premium ?</h3>
            <p className="text-gray-200 mb-6">
              Cette offre est conçue pour offrir une solution complète avec un design et des fonctionnalités avancées. Nous réalisons un site qui répond à vos besoins spécifiques pour une présence en ligne impactante.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-quaternary font-bold mr-3 text-xl">1.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Solution Complète</h4>
                  <p className="text-gray-200">Un site de 5+ pages avec des options avancées pour une expérience utilisateur riche.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-quaternary font-bold mr-3 text-xl">2.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Design Sur Mesure</h4>
                  <p className="text-gray-200">Un design haut de gamme adapté à votre marque avec un aller-retour de correction inclus.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-quaternary font-bold mr-3 text-xl">3.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Fonctionnalités Avancées</h4>
                  <p className="text-gray-200">Intégration de formulaires, SEO, et autres options pour maximiser votre impact en ligne.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
