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
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        }
      },
      animation: {
        "slide-left": "slide-left 0.3s ease-out", // Define the animation
      },
      backgroundImage: {
        'coffee-beans-pattern': "url('/src/assets/coffee-bean-background.svg')",
        'frame': "url('/src/assets/card-frame.png')",
        'box': "url('/src/assets/product-icon-box.svg')",
        'polaroid': "url('/src/assets/polaroid.png')",
      }
    },
  },
  plugins: [],
}