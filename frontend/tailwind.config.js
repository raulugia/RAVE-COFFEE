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
      },
      colors: {
        mustard: "#FDC700"
      }
    },
  },
  plugins: [],
}