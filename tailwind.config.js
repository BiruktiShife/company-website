/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A5F", // Dark Blue
          hover: "#2B4E7F",
        },
        secondary: {
          DEFAULT: "#2C2C2C", // Charcoal Gray
          light: "#4A4A4A", // Secondary Text
        },
        accent: {
          DEFAULT: "#A52A2A", // Deep Red
          hover: "#C9A44A", // Gold
          dark: "#0A2239", // Navy Blue
        },
        background: "#F5F5F5", // Light Gray
        text: {
          primary: "#222222", // Black
          secondary: "#4A4A4A", // Dark Gray
        },
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
    },
  },
  plugins: [],
};
