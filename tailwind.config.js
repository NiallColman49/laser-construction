/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Maax Light"],
        medium: ["Maax Medium"],
        bold: ["Maax"],
      },
      colors: {
        "laser-green": "#3f4d52",
        "laser-gold": "#b17938",
      },
      height: {
        70: "70vh",
      },
    },
  },
  plugins: [],
};
