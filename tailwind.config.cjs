/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "First": "#171717",
        "Last": "#ddd"
      },
      fontFamily: {
        "My": ["Fira Code"]
      }
    },
  },
  plugins: [],
}
