import React from "react";
import {
  webCardColors,
  itCardColors,
  WebAccentColor,
  ITAccentColor
} from "../styles/cardColors";

type Theme = "web" | "it";

interface BaseCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  bgOpacity?: number;
  theme: Theme;
  price?: string;
  additionalCost?: string;
}

type WebCardProps = BaseCardProps & {
  theme: "web";
  accentColor: WebAccentColor;
};

type ITCardProps = BaseCardProps & {
  theme: "it";
  accentColor: ITAccentColor;
};

type CardProps = WebCardProps | ITCardProps;

export default function Card({
  title,
  description,
  features,
  link,
  accentColor,
  bgOpacity = 90,
  theme,
  price,
  additionalCost
}: CardProps) {
  const colors =
    theme === "web"
      ? webCardColors[accentColor]
      : itCardColors[accentColor];

  return (
    <a
      href={link}
      className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 h-96 flex flex-col overflow-hidden group"
      style={{
        backgroundColor: `rgba(26, 32, 44, ${bgOpacity / 100})`,
        border: `1px solid ${colors.border}40`,
        boxShadow: `0 4px 14px ${colors.shadow}`
      }}
    >
      <div className="flex-grow overflow-y-auto">
        <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>
          {title}
        </h3>
        <p className="text-gray-200 mb-4 text-sm md:text-base line-clamp-3">
          {description}
        </p>
        {price && <p className="text-lg font-semibold mb-2 text-gray-100">Tarif : {price}</p>}
        {additionalCost && <p className="text-sm text-gray-300 mb-4">{additionalCost}</p>}
        <ul className="list-none space-y-1 text-gray-200 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1" style={{ color: colors.text }}>
                ✓
              </span>
              <span className="text-sm md:text-base line-clamp-1">
                {feature}
              </span>
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
