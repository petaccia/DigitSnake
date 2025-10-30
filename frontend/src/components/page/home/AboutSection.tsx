export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/90 to-primary/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">À Propos de Beaver&apos;Aid</h2>
        <div className="max-w-3xl mx-auto text-center bg-primary/98 p-8 rounded-xl shadow-2xl/30 shadow-senary border border-secondary/10">
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            Beaver&apos;Aid est dédié à rendre l’<span className="font-semibold text-secondary">informatique</span> simple et accessible à tous. Notre mission est d’accompagner nos clients, avec un accent particulier sur les <span className="font-semibold text-senary">seniors</span>, pour réduire la <span className="font-semibold text-senary">fracture numérique</span>.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            Que ce soit pour un <span className="font-semibold text-secondary">site web</span> sur mesure ou un <span className="font-semibold text-octonary">dépannage informatique</span>, nous proposons des solutions personnalisées adaptées à vos besoins.
          </p>
        </div>
      </div>
    </section>
  );
}
