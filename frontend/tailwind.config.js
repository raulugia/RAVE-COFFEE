/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "permanent-marker": ["Permanent Marker", "sans-serif"],
        "fira": ["Fira Code", "sans-serif"],
      },
      colors: {
        mustard: "#FDC700",
        black: "#111111"
      }
    },
  },
  plugins: [],
}