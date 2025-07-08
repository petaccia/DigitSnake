// components/cardColors.ts

export const webCardColors = {
  onepage: {
    border: "#2ec4b6",
    text: "#2ec4b6",
    shadow: "rgba(46, 196, 182, 0.3)",
    hoverShadow: "rgba(46, 196, 182, 0.45)",
  },
  starter: {
    border: "#ff9f1c",
    text: "#ff9f1c",
    shadow: "rgba(255, 159, 28, 0.3)",
    hoverShadow: "rgba(255, 159, 28, 0.45)",
  },
  standard: {
    border: "#e71d36",
    text: "#e71d36",
    shadow: "rgba(231, 29, 54, 0.3)",
    hoverShadow: "rgba(231, 29, 54, 0.45)",
  },
  premium: {
    border: "#8b5cf6",
    text: "#8b5cf6",
    shadow: "rgba(139, 92, 246, 0.3)",
    hoverShadow: "rgba(139, 92, 246, 0.45)",
  },
  prenium: {
    border: "#145afd",
    text: "#145afd",
    shadow: "rgba(20, 90, 253, 0.3)",
    hoverShadow: "rgba(20, 90, 253, 0.45)",
  },
  fullstack: {
    border: "#e91e63",
    text: "#e91e63",
    shadow: "rgba(233, 30, 99, 0.3)",
    hoverShadow: "rgba(233, 30, 99, 0.45)",
  },
};

export const itCardColors = {
  hardware: {
    border: "#f39c12", // orange
    text: "#f39c12",
    shadow: "rgba(243, 156, 18, 0.3)",
    hoverShadow: "rgba(243, 156, 18, 0.45)",
  },
  software: {
    border: "#27ae60", // vert
    text: "#27ae60",
    shadow: "rgba(39, 174, 96, 0.3)",
    hoverShadow: "rgba(39, 174, 96, 0.45)",
  },
  network: {
    border: "#2980b9", // bleu
    text: "#2980b9",
    shadow: "rgba(41, 128, 185, 0.3)",
    hoverShadow: "rgba(41, 128, 185, 0.45)",
  },
  seniors: {
    border: "#9b59b6", // violet
    text: "#9b59b6",
    shadow: "rgba(155, 89, 182, 0.3)",
    hoverShadow: "rgba(155, 89, 182, 0.45)",
  },
  security: {
    border: "#e74c3c", // rouge
    text: "#e74c3c",
    shadow: "rgba(231, 76, 60, 0.3)",
    hoverShadow: "rgba(231, 76, 60, 0.45)",
  },
  data: {
    border: "#f1c40f", // jaune
    text: "#f1c40f",
    shadow: "rgba(241, 196, 15, 0.3)",
    hoverShadow: "rgba(241, 196, 15, 0.45)",
  },
  support: {
    border: "#1abc9c", // turquoise
    text: "#1abc9c",
    shadow: "rgba(26, 188, 156, 0.3)",
    hoverShadow: "rgba(26, 188, 156, 0.45)",
  },
};

export type WebAccentColor = keyof typeof webCardColors;
export type ITAccentColor = keyof typeof itCardColors;
