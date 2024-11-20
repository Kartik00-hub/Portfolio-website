/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        qwitcher: ['"Qwitcher Grypen"', "system-ui"],
        archivo: ['"Archivo Black"', "sans-serif"],
        caveat: ['"Caveat"', "cursive"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        "slide-in-left": "slideInLeft 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
