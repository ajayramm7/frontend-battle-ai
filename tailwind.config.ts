import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#114C5A", // Nocturnal Expedition
        surface: "#172B36", // Oceanic Noir
        primary: "#FF9932", // Deep Saffron
        secondary: "#FFC801", // Forsythia
        textPrimary: "#F1F6F4", // Arctic Powder
        textMuted: "#D9E8E2", // Mystic Mint
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
