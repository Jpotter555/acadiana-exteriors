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
        // Traditional Cajun Heritage Theme
        // Deep Blue from Acadian flag, Crimson Red from Spanish colonial, Gold from flag's star/castle
        primary: {
          DEFAULT: "#1E3A8A", // Deep Blue
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#1E3A8A",
          600: "#1E40AF",
          700: "#1D4ED8",
          800: "#1E3A8A",
          900: "#1E3A70",
        },
        accent: {
          DEFAULT: "#F59E0B", // Gold/Mustard
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        secondary: {
          DEFAULT: "#991B1B", // Crimson Red
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#991B1B",
          800: "#7F1D1D",
          900: "#7F1D1D",
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
