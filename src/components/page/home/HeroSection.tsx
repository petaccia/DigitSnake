"use client";

import DigitSnakeLogo from "@/components/logo/Logo";


const HeroSection = () => {
  return (
    <header className="pt-24 pb-16 md:pt-32 md:pb-24 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <section className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Bienvenue chez <span className="text-secondary">DigitSnake</span></h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Votre partenaire pour des <span className="text-secondary">solutions numériques accessibles</span>. Nous offrons des services de <span className="text-secondary">création web</span> et de <span className="text-secondary">dépannage informatique</span> pour particuliers, professionnels et seniors.
            </p>
            <a href="/devis" className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors">
              Obtenir un Devis Gratuit
            </a>
          </section>
          <div className="md:w-1/2 flex justify-center">
            <DigitSnakeLogo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
