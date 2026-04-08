import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070b",
        foreground: "#d8ecff",
        graphite: "#0f1621",
        surface: "#111927",
        edge: "#1d2a3f",
        accent: "#29d6ff",
        glow: "#905cff",
      },
      boxShadow: {
        cyber: "0 20px 60px rgba(6, 15, 25, 0.5), 0 0 0 1px rgba(41, 214, 255, 0.08)",
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at 20% 20%, rgba(41, 214, 255, 0.16), transparent 40%), radial-gradient(circle at 80% 0%, rgba(144, 92, 255, 0.16), transparent 35%)",
      },
      animation: {
        "border-flow": "borderFlow 10s linear infinite",
      },
      keyframes: {
        borderFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      fontFamily: {
        display: ["Orbitron", "Rajdhani", "Eurostile", "sans-serif"],
        sans: ["Sora", "Manrope", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

