"use client";

import PortfolioCard from "@/components/page/portfolio/PortfolioCard";

const projects = [
  {
    id: 1,
    title: "Site e-commerce",
    description: "Plateforme complète avec gestion des commandes et paiements sécurisés",
    image: "/services/web/pack-premium.jpg",
  },
  {
    id: 2,
    title: "Application mobile",
    description: "Application iOS et Android pour la gestion de tâches",
    image: "/services/formation-senior.jpg",
  },
  {
    id: 3,
    title: "Refonte de site web",
    description: "Modernisation d'un site existant avec amélioration des performances",
    image: "/services/installation.jpg",
  },
];

export default function ProjectList() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Nos Projets Réalisés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
