/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero:
          'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("./assets/hero.png")',
      },
      backgroundColor: {
        primary: "#004174",
        secondary: "#CABA4C",
      },
    },
  },
  plugins: [],
};
