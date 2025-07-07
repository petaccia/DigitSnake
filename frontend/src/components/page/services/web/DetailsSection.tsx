import Card from "./Card";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Nos Offres de Développement Web</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="OnePage Express"
            description="Une page unique, idéale pour une présence en ligne rapide et efficace. Parfait pour les portfolios ou les petites entreprises."
            features={["Design moderne et responsive", "Mise en ligne rapide", "Optimisation SEO de base"]}
            link="/services/web/onepage-express"
            accentColor="quinary"
            bgOpacity={90}
          />
          <Card
            title="Pack Starter"
            description="Un site de 3 pages pour présenter votre activité de manière professionnelle avec une structure claire."
            features={["Accueil, À Propos, Contact", "Design personnalisé", "Intégration de contenu"]}
            link="/services/web/pack-starter"
            accentColor="senary"
            bgOpacity={85}
          />
          <Card
            title="Pack Standard"
            description="Un site vitrine complet de 5 pages pour une présentation détaillée de votre activité. Parfait pour une présence en ligne professionnelle et étoffée."
            features={["Accueil, Services, À Propos, FAQ/Galerie statique, Contact", "Design personnalisé", "Intégration de contenu"]}
            link="/services/web/pack-standard"
            accentColor="tertiary"
            bgOpacity={90}
          />
          <div className="md:col-span-3 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <Card
                title="Pack Premium"
                description="Des solutions adaptées pour des sites plus complexes selon vos besoins spécifiques."
                features={["Sites multi-pages", "Options avancées", "Support technique"]}
                link="/services/web/pack-premium"
                accentColor="prenium"
                bgOpacity={80}
              />
              <Card
                title="Offre Full Stack"
                description="Applications web Full Stack sur mesure pour des projets complexes selon vos besoins spécifiques."
                features={["Frontend et backend", "Applications personnalisées", "Support technique continu"]}
                link="/services/web/full-stack"
                accentColor="octonary"
                bgOpacity={80}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
