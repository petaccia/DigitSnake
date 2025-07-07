import React from "react";

interface CardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  accentColor: 'quinary' | 'senary' | 'octonary';
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
    }
  };

  const colors = colorMap[accentColor];

  return (
    <a
      href={link}
      className="group block p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: `rgba(26, 32, 44, ${bgOpacity / 100})`,
        border: `1px solid ${colors.border}40`,
        boxShadow: `0 4px 14px ${colors.shadow}`,
      }}
    >
      <h3 
        className="text-xl font-bold mb-4" 
        style={{ color: colors.text }}
      >
        {title}
      </h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <ul className="list-none space-y-2 text-gray-200">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2" style={{ color: colors.text }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div 
        className="mt-4 font-bold text-sm transition-all duration-300 group-hover:translate-x-1"
        style={{ color: colors.text }}
      >
        Cliquez pour en savoir plus →
      </div>
    </a>
  );
}