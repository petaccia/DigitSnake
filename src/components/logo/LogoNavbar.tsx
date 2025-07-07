"use client";

import Link from "next/link";
import { useId } from 'react';

interface LogoNavbarProps {
  isScrolled: boolean;
}

const LogoNavbar: React.FC<LogoNavbarProps> = ({ isScrolled }) => {
  const uniqueId = useId().replace(/:/g, '_');
  const waveGradientId = `wave-gradient-${uniqueId}`;

  return (
    <Link 
      href="/" 
      className="flex items-center space-x-3 group"
      aria-label="Accueil"
    >
      <div className="flex items-center space-x-3">
        {/* Vague en plus petit */}
        <svg 
          className={`h-8 w-8 transition-all duration-300 ${isScrolled ? 'h-12 w-12' : 'h-14 w-14'}`}
          viewBox="0 0 660 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={waveGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2ec4b6" />
              <stop offset="100%" stopColor="#2979ff" />
            </linearGradient>
          </defs>
          <path 
            d="M50 120 Q 120 40, 190 120 T 330 120 T 470 120 T 610 120"
            stroke={`url(#${waveGradientId})`}
            strokeWidth="50" 
            fill="none" 
            opacity="0.8" 
          />
        </svg>

        <span className={`font-display font-bold text-secondary transition-all ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
          DigitSnake
        </span>
      </div>
    </Link>
  );
};

export default LogoNavbar;