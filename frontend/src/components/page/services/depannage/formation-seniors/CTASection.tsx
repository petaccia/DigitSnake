"use client";

import Link from "next/link";

export default function FormationSeniorsCTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Prêt à maîtriser la technologie ?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Nos formations personnalisées vous aideront à utiliser vos appareils en toute confiance.
          Rejoignez nos ateliers dès aujourd'hui !
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-dark transition duration-300"
          >
            Réserver une formation
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300"
          >
            Découvrir nos autres services
          </Link>
        </div>
      </div>
    </section>
  );
}
