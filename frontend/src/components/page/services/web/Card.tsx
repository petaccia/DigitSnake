import React from "react";

interface CardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  accentColor: 'quinary' | 'senary' | 'octonary' | 'tertiary' | 'prenium';
  bgOpacity?: number;
}

export default function Card({
  title,
  description,
  features,
  link,
  accentColor,
  bgOpacity = 90,
}: CardProps) {
  // Mapping des couleurs avec valeurs hexadécimales
  const colorMap = {
    quinary: {
      border: "#2ec4b6",
      text: "#2ec4b6",
      shadow: "rgba(46, 196, 182, 0.3)",
      hoverShadow: "rgba(46, 196, 182, 0.45)"
    },
    senary: {
      border: "#ff9f1c",
      text: "#ff9f1c",
      shadow: "rgba(255, 159, 28, 0.3)",
      hoverShadow: "rgba(255, 159, 28, 0.45)"
    },
    octonary: {
      border: "#e71d36",
      text: "#e71d36",
      shadow: "rgba(231, 29, 54, 0.3)",
      hoverShadow: "rgba(231, 29, 54, 0.45)"
    },
    tertiary: {
      border: " #8b5cf6",
      text: " #8b5cf6",
      shadow: " rgba(139, 92, 246, 0.3)",
      hoverShadow: " rgba(139, 92, 246, 0.45)"
    },
    prenium: {
      border: "#145afd",
      text: "#145afd",
      shadow: "rgba(20, 90, 253, 0.3)",
      hoverShadow: "rgba(20, 90, 253, 0.45)"
    }
  };

  const colors = colorMap[accentColor];

  return (
    <a
      href={link}
      className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 h-96 flex flex-col overflow-hidden"
      style={{
        backgroundColor: `rgba(26, 32, 44, ${bgOpacity / 100})`,
        border: `1px solid ${colors.border}40`,
        boxShadow: `0 4px 14px ${colors.shadow}`,
      }}
    >
      <div className="flex-grow overflow-y-auto">
        <h3 
          className="text-xl font-bold mb-3" 
          style={{ color: colors.text }}
        >
          {title}
        </h3>
        <p className="text-gray-200 mb-4 text-sm md:text-base line-clamp-3">{description}</p>
        
        <ul className="list-none space-y-1 text-gray-200 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1" style={{ color: colors.text }}>✓</span>
              <span className="text-sm md:text-base line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div 
        className="font-bold text-sm transition-all duration-300 group-hover:translate-x-1 pt-2 border-t border-gray-700 mt-auto"
        style={{ color: colors.text }}
      >
        Cliquez pour en savoir plus →
      </div>
    </a>
  );
}