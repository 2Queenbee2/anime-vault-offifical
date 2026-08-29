// Per-page accent colors, plus the correct bar-text color for contrast.
// OWA palette: Royal Cosmic Blue + Mystic Violet are dark enough for light/ivory text.
// Aurora Cyan + Moon Gold are light enough that they need Deep Space (dark) text instead.
export const pageThemes = {
  home: { accent: "#2455A4", barText: "#F4F1FA", background: "/background-blue.png" },
  shop: { accent: "#4AAFE3", barText: "#18213D", background: "/background-blue.png" },
  games: { accent: "#7650B8", barText: "#F4F1FA", background: "/background-violet.png" },
  services: { accent: "#D9B765", barText: "#18213D", background: "/background-gold.png" },
} as const;
