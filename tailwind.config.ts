import type { Config } from "tailwindcss";

// ─── Tailwind Configuration ───────────────────────────────────────────────────

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        "on-surface":          "#191b24",
        "on-surface-variant":  "#434656",
        primary:               "#000000",
        "accent-purple":       "#8E94F2",
        "accent-teal":         "#A8E6CF",
        "accent-yellow":       "#FFD384",
        "accent-dark-purple":  "#8B5CF6",
        "surface-container":   "#F5F5F5",
        "surface-container-high": "#FFFFFF",
        "page-bg":             "#DDDDD8",
      },
      fontFamily: {
        headline: ["Epilogue", "sans-serif"],
        body:     ["Manrope", "sans-serif"],
        label:    ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg:      "0.5rem",
        xl:      "1rem",
        hero:    "2.5rem",
        wrapper: "3rem",
        full:    "9999px",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        blink:       "blink 1s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0.5" },
          "50%":      { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
