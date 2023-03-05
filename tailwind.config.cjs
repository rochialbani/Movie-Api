/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE6C4D",
        secondary: {
          100: "#1E1F25",
          900: "#131517"
        }
      }
    },
  },
  plugins: [],
}