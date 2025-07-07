"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Détails de l'Offre Pack Starter</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/85 p-8 rounded-2xl shadow-xl border border-tertiary/30 mb-8">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-tertiary-rgb), 0.3);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-tertiary">Tarif : 450-500€ TTC</h3>
            <p className="text-gray-200 mb-6">
              Notre offre Pack Starter est conçue pour les entreprises et professionnels qui souhaitent un site vitrine de 3 pages pour présenter leur activité de manière complète. Une solution idéale pour établir une présence en ligne professionnelle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-tertiary">Ce qui est inclus :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-tertiary mr-2">✓</span> 3 pages : Accueil, Services, Contact</li>
                  <li className="flex items-center"><span className="text-tertiary mr-2">✓</span> Design personnalisé et responsive (mobile et desktop)</li>
                  <li className="flex items-center"><span className="text-tertiary mr-2">✓</span> 1 aller-retour de correction inclus</li>
                  <li className="flex items-center"><span className="text-tertiary mr-2">✓</span> Délai de livraison : 5-7 jours ouvrés</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-tertiary">Options supplémentaires :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-tertiary mr-2">Sur devis</span> Pages supplémentaires</li>
                  <li className="flex items-center"><span className="text-tertiary mr-2">Sur devis</span> Optimisation SEO basique</li>
                  <li className="flex items-center"><span className="text-tertiary mr-2">Sur devis</span> Intégration Google Maps</li>
                  <li className="flex items-center"><span className="text-tertiary mr-2">Sur devis</span> Nom de domaine personnalisé</li>
                  <li className="flex items-center"><span className="text-tertiary mr-2">Note</span> Pas de galerie ni CMS dans cette offre</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-primary/75 p-8 rounded-2xl shadow-xl border border-tertiary/20">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-tertiary-rgb), 0.2);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-tertiary">Pourquoi Choisir Pack Starter ?</h3>
            <p className="text-gray-200 mb-6">
              Cette offre est idéale pour ceux qui veulent un site vitrine structuré avec une navigation claire. Nous vous accompagnons pour créer une présence en ligne qui reflète votre identité professionnelle.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-tertiary font-bold mr-3 text-xl">1.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Présence Structurée</h4>
                  <p className="text-gray-200">Un site de 3 pages pour présenter vos services, votre histoire et faciliter le contact avec vos clients.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-tertiary font-bold mr-3 text-xl">2.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Design Personnalisé</h4>
                  <p className="text-gray-200">Un design adapté à votre image avec un aller-retour de correction inclus pour garantir votre satisfaction.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-tertiary font-bold mr-3 text-xl">3.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Livraison Rapide</h4>
                  <p className="text-gray-200">Votre site prêt en 5 à 7 jours ouvrés, parfait pour démarrer rapidement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
