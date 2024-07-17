/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "hero-pattern": "url('/coconut-tree-hero.jpg')",
      "hero-pattern2": "url('/fresh-coconuts-background.jpg')",
    },
  },
  plugins: [],
};

