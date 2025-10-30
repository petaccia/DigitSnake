import { useId } from 'react';

export default function DigitSnakeLogo() {
  const uniqueId = useId().replace(/:/g, '_');
  const textGradientId = `text-gradient-${uniqueId}`;
  const waveGradientId = `wave-gradient-${uniqueId}`;

  return (
    <svg 
      width="700" 
      height="200" 
      viewBox="0 0 700 200" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DigitSnake Logo"
    >
      <defs>
        <linearGradient id={textGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2ec4b6" />
          <stop offset="100%" stopColor="#2979ff" />
        </linearGradient>
        <linearGradient id={waveGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2ec4b6" />
          <stop offset="100%" stopColor="#2979ff" />
        </linearGradient>
      </defs>

      {/* Onde stylisée */}
      <path 
        d="M50 120 Q 120 40, 190 120 T 330 120 T 470 120 T 610 120"
        stroke={`url(#${waveGradientId})`} 
        strokeWidth="12" 
        fill="none" 
        opacity="0.3" 
      />

      {/* Texte avec police locale */}
      <text 
        x="50%" 
        y="110" 
        textAnchor="middle" 
        fontSize="52px" 
        fill={`url(#${textGradientId})`} 
        letterSpacing="24px"
       className='font-ma-shan-zheng'
        
      >
        Beaver&apos;Aid
      </text>
    </svg>
  );
}