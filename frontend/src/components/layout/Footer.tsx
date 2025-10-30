"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <footer className="py-10 bg-primary/95 text-gray-300 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">À Propos</h3>
            <p className="text-gray-400 mb-4">Beaver&apos;Aid simplifie le numérique pour tous, avec un focus sur l&apos;accessibilité et le support personnalisé.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-octonary transition-colors duration-300">Accueil</Link></li>
              <li>
                <div className="flex items-center cursor-pointer" onClick={toggleServices}>
                  <a href="/services" className="hover:text-octonary transition-colors duration-300">Services</a>
                  <span className="ml-2 text-secondary">{isServicesOpen ? '▼' : '▶'}</span>
                </div>
                <ul className={`ml-4 mt-1 space-y-1 text-sm text-gray-400 ${isServicesOpen ? 'block' : 'hidden'}`}>
                  <li><a href="/services/sites-web" className="hover:text-secondary transition-colors duration-300">Création de Sites Web</a></li>
                  <li><a href="/services/depannage" className="hover:text-secondary transition-colors duration-300">Dépannage Informatique</a></li>
                </ul>
              </li>
              <li><a href="/contact" className="hover:text-octonary transition-colors duration-300">Contact</a></li>
              <li><a href="/faq" className="hover:text-octonary transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Légal</h3>
            <ul className="space-y-2">
              <li><a href="/mentions-legales" className="hover:text-octonary transition-colors duration-300">Mentions Légales</a></li>
              <li><a href="/politique-confidentialite" className="hover:text-octonary transition-colors duration-300">Politique de Confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary/30 pt-4 text-center text-sm text-gray-400">
          <p>Conçu avec passion par Beaver&apos;Aid pour simplifier le numérique.</p>
        </div>
        <div>
          <p className="text-lg font-medium text-octonary text-center mt-16">&copy; {new Date().getFullYear()} Beaver&apos;Aid. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
