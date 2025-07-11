import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
}

export default function PortfolioCard({ title, description, image }: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48">
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
