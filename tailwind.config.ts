import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1360px", // Ελαφρώς πιο σφιχτό max-width για editorial αίσθηση
      },
    },
    extend: {
      colors: {
        royal: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          400: "#6082EE",
          DEFAULT: "#4169E1", // Primary Royal Blue
          600: "#254EDB",
          700: "#1D4ED8",     // Deep Accent Blue
          800: "#1E3A8A",     // Corporate Navy
          900: "#172554",     // Logo Deep Navy (από το GV LOGO.svg)
          950: "#0B1120",     // Architectural Dark Surface
        },
        ivory: {
          DEFAULT: "#FAF9F6", // Διακριτικό off-white για ξεκούραστη ανάγνωση
          subtle: "#F3F4F6",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "royal-gradient":
          "linear-gradient(135deg, #0B1120 0%, #172554 55%, #1E3A8A 100%)",
        "glass-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        "editorial": "0 20px 50px -15px rgba(15, 23, 42, 0.07)",
        "royal-glow": "0 10px 30px -10px rgba(65, 105, 225, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;