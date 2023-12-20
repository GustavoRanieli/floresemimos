/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "fundo": "url('./assents/5226644.jpg')"
      },
      listStyleImage: {
        "svgFlor": "url('./assents/ecoFlore.svg')",
      },
    },
  },
  plugins: [],
}

