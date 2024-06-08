/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { 
        "slab":   ["Roboto Slab", "serif"]
    } 
    },
  },
  plugins: [],
}