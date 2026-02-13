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
        // Refined color palette for Acadiana Exteriors
        primary: {
          DEFAULT: "#5E7B83", // Teal Blue-gray
          50: "#F0F4F5",
          100: "#E1E9EB",
          200: "#C2CCCD",
          300: "#A4B5B9",
          400: "#819599",
          500: "#5E7B83",
          600: "#4E6670",
          700: "#3E515C",
          800: "#2E3C48",
          900: "#1E2734",
        },
        secondary: {
          DEFAULT: "#D2AF6F", // Gold/Tan
          50: "#FAF7F1",
          100: "#F5EFE3",
          200: "#EBDFC7",
          300: "#E0CFAB",
          400: "#D6BF8F",
          500: "#D2AF6F",
          600: "#C39F5C",
          700: "#A88546",
          800: "#806534",
          900: "#584522",
        },
        accent: {
          DEFAULT: "#9D7B56", // Brown/Tan
          50: "#F5F1EC",
          100: "#EBE3D9",
          200: "#D7C7B3",
          300: "#C3AB8D",
          400: "#AF8F67",
          500: "#9D7B56",
          600: "#826546",
          700: "#674F36",
          800: "#4C3926",
          900: "#312316",
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
