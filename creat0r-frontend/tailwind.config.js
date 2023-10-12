/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alliance': ["Alliance", "sans-serif"],
        'sfprodisplay': ["SFProDisplay", "sans-serif"],
        'trip': ["Trip", "sans-serif"]
      },
    },
  },
  plugins: [],
}

