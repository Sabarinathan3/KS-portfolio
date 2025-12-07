/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Correct ✔
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          soft: "#60A5FA",
          strong: "#1D4ED8",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          soft: "#A855F7",
        },
        surface: {
          light: "#F3F4F6",
          dark: "#0F172A",
        },
        text: {
          primary: "#F9FAFB",
          secondary: "#CBD5F5",
          muted: "#64748B",
        },
      },
      boxShadow: {
        "glow-blue": "0 0 35px rgba(59,130,246,0.45)",
        "glow-purple": "0 0 35px rgba(139,92,246,0.45)",
        "card-soft": "0 18px 45px rgba(15,23,42,0.9)",
        "nav-soft": "0 0 25px rgba(15,23,42,0.9)",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(90deg, #3B82F6, #6366F1, #8B5CF6)",
        "gradient-soft":
          "radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 60%)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
