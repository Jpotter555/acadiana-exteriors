import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bayou Natural Theme
        // Louisiana landscape: Spanish moss, bayous, sunsets
        primary: {
          DEFAULT: "#4B5320", // Mossy Green
          50: "#F5F5F0",
          100: "#E8E8D9",
          200: "#D1D1B3",
          300: "#BABA8D",
          400: "#A3A367",
          500: "#4B5320",
          600: "#3C4219",
          700: "#2D3213",
          800: "#1E210C",
          900: "#0F1106",
        },
        accent: {
          DEFAULT: "#C2410C", // Burnt Orange (Louisiana sunsets)
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
        secondary: {
          DEFAULT: "#475569", // Slate Blue-Gray (water, sky)
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
