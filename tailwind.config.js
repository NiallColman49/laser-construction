/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Maax Light"],
        medium: ["Maax Medium"],
        bold: ["Maax"],
        decor: ["Tiempos Text Regular"],
      },
      colors: {
        "laser-green": "#3f4d52",
        "laser-gold": "#b17938",
      },
      height: {
        70: "70vh",
      },
      height: {
        725: "725px",
      },
      spacing: {
        "space-between": "space-between",
      },
      backgroundImage: {
        "gold-background": "url('./assets/gold-logo-background.svg')",
      },
      fontSize: {
        title: ["57px"],
      },
    },
  },
  plugins: [],
};
