/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        raleway: ["'Raleway'", "serif"],
        roboto: ["'Roboto'", "sans-serif"],
        openSans: ["'Open Sans'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"]
      }
    },
  },
  plugins: [],
}