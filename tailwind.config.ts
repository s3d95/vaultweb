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
        // Chrome / Monochrome Luxury system (mirrors the main site)
        background: "#050506",
        elevated: "#0b0b0e",
        foreground: "#f3f3f5",
        dim: "#8a8a92",
        faint: "#55555c",
        graphite: "#0b0b0e",
        surface: "#111116",
        edge: "#1e1e24",
        // "accent" is intentionally monochrome — white chrome, no color.
        accent: "#ffffff",
        glow: "#ffffff",
      },
      boxShadow: {
        cyber: "0 30px 70px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        chrome: "0 10px 40px rgba(255, 255, 255, 0.14)",
        "chrome-hover": "0 14px 50px rgba(255, 255, 255, 0.28)",
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.06), transparent 60%)",
        "chrome-text":
          "linear-gradient(176deg, #ffffff 0%, #e4e4e8 22%, #9a9aa2 46%, #ffffff 60%, #707078 82%, #d8d8dc 100%)",
      },
      animation: {
        "border-flow": "borderFlow 10s linear infinite",
        shimmer: "shimmer 1.6s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "spin-slow": "spin 1s linear infinite",
      },
      keyframes: {
        borderFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          to: { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.4rem",
        pill: "44px",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "Segoe UI", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      transitionTimingFunction: {
        chrome: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
