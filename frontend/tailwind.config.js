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
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-left-nav": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-down": {
          "0%": { marginTop: "0px", opacity: "0" },
          "100%": { marginTop: "15px", opacity: "1" },
        },
        "slide-up": {
          "0%": { height: "auto", opacity: "1" },
          "100%": { height: "0px", opacity: "0" },
        },
        "slide-up-div": {
          "0%": { height: "auto"},
          "100%": { height: "300px" },
        },
        "skeleton-pulse": {
          "0%": {
            opacity: 1
          },
          "50%":{
            opacity: 0.5
          },
          "100%": {
            opacity: 1
          }
        }
      },
      animation: {
        "slide-left": "slide-left 0.3s ease-out",
        "slide-right": "slide-right 0.3s ease-out",
        "slide-down": "slide-down 0.3s ease-out forwards",
        "slide-up": "slide-up 0.1s ease-out forwards",
        "skeleton-pulse": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite"
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