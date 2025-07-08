"use client";

import React from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  badgeText?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export default function HeroSection({
  title,
  description,
  backgroundImage,
  badgeText = "Service professionnel",
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroSectionProps) {
  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Fond avec filtre sombre */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
        aria-hidden="true"
      />
      
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/70 z-0" aria-hidden="true"></div>
      
      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-indigo-900/30 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <span className="text-indigo-200 font-semibold">{badgeText}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100 drop-shadow max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={primaryButtonLink}
              className="bg-white text-indigo-900 hover:bg-indigo-100 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              {primaryButtonText}
            </a>
            <a
              href={secondaryButtonLink}
              className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {secondaryButtonText}
            </a>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce w-10 h-16 rounded-full border-4 border-white/30 flex items-start justify-center p-2">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-indigo-600/20 blur-xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-indigo-600/20 blur-xl z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-white/10 z-0"></div>
    </section>
  );
}
