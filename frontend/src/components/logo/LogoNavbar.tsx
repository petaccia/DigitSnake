"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoNavbarProps {
  isScrolled: boolean;
}

const LogoNavbar: React.FC<LogoNavbarProps> = ({ isScrolled }) => {

  return (
    <Link 
      href="/" 
      className="flex items-center space-x-3 group"
      aria-label="Accueil"
    >
      <div className="flex items-center space-x-3">
        <Image 
          src="/logo/logo.png" 
          alt="Logo Beaver'Aid" 
          width={isScrolled ? 40 : 50} 
          height={isScrolled ? 40 : 50}
          priority
        />

        <span className={`font-display font-bold text-secondary transition-all ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
          Beaver&apos;Aid
        </span>
      </div>
    </Link>
  );
};

export default LogoNavbar;