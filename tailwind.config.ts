import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "Menlo", "Monaco", "Consolas", "monospace"]
      },
      colors: {
        brand: {
          primary: "#adff2f", // Lime Green
          secondary: "#84cc16", // Standard Lime
          light: "#f7fee7"
        },
        slate: {
          950: "#050508", // Near Black
          900: "#0c0c10",
          850: "#13131b",
          800: "#1a1a24"
        },
        ink: {
          950: "#050508",
          900: "#0c0c10",
          800: "#1a1a24"
        }
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(173, 255, 47, 0.12)",
        card: "0 4px 20px rgba(0, 0, 0, 0.04)",
        "card-dark": "0 10px 35px rgba(0, 0, 0, 0.55)",
        "brand-glow": "0 0 20px rgba(173, 255, 47, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
