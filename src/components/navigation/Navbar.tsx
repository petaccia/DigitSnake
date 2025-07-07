"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import LogoNavbar from "../logo/LogoNavbar";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);


  // Gestion du scroll pour l'effet de réduction
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-primary/50 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <LogoNavbar isScrolled={isScrolled} />

          {/* Menu Desktop */}
            <DesktopMenu />

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/devis"
              className="btn-primary flex items-center space-x-2 hover:scale-105 transform transition-all duration-200 px-6 py-2.5"
            >
              <span>Devis Gratuit</span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;