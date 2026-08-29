import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // OWA Color Palette — Soft • Cosmic • Anime • Adventure
        ivory: "#F4F1FA", // Soft Moonlight — main background
        sand: "#E8E9F3", // Starlight — secondary background
        linen: "#DCEAF5", // Frosted Blue — cards/surfaces
        taupe: "#D8D1E8", // Lavender Mist — borders/subtle sections
        warmgray: "#7A7D91", // Twilight Gray — muted text
        navy: "#18213D", // Deep Space — strong text / high contrast
        brand: "#2455A4", // Royal Cosmic Blue — primary brand/headings
        magenta: "#7650B8", // Mystic Violet — accent / Games page
        sage: "#4AAFE3", // Aurora Cyan — highlights / Shop page
        gold: "#D9B765", // Moon Gold — premium / Services page
        slate: "#2455A4", // Royal Cosmic Blue — Home page accent
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        title: ["Monstera", "cursive"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
