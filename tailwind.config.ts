import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#04061a",
          900: "#080c2a",
          800: "#0d1240",
          700: "#111a55",
          600: "#1a256e",
        },
        purple: {
          primary: "#6c2bd9",
          light: "#8b5cf6",
          dark: "#4c1d95",
          glow: "#a855f7",
        },
        pink: {
          accent: "#ec4899",
          bright: "#f472b6",
        },
        gold: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
        },
      },
      fontFamily: {
        arabic: ["Cairo", "Tajawal", "sans-serif"],
        sans: ["Cairo", "Tajawal", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #04061a 0%, #080c2a 50%, #0d1240 100%)",
        "card-gradient":
          "linear-gradient(145deg, #111a55 0%, #0d1240 100%)",
        "purple-gradient":
          "linear-gradient(135deg, #6c2bd9 0%, #4c1d95 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "marquee": "marquee 30s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(108, 43, 217, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(108, 43, 217, 0.9)" },
        },
        slideInRight: {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        fadeInUp: {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(108, 43, 217, 0.6)",
        "glow-pink": "0 0 30px rgba(236, 72, 153, 0.6)",
        card: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
