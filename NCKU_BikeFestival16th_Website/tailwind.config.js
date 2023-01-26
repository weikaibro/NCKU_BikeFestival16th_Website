/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'myblue': '#003CD1',
        'mygray': '#D9D9D9',
      }
    },
  },
  plugins: [],
}
