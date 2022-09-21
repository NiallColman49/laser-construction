/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./construction-home.html",
    "./about.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Maison Neue"],
        medium: ["Maax Medium"],
        bold: ["Maax"],
        decor: ["Copyright Klim Type Foundry"],
        mono: ["Maison Neue"],
        copy: ["Copyright Klim Type Foundry"],
        primary: ["Programme Light"],
        primaryTitle: ["Programme Bold"],
      },
      screens: {
        mobile: { max: "600px" },
        sm: "601px",
      },
      colors: {
        "laser-green": "#3f4d52",
        "laser-gold": "#b17938",
        "laser-blue": "#1c2030",
        "grey-text": "#a9a9a9",
      },
      height: {
        70: "70vh",
      },
      height: {
        725: "725px",
        775: "775px",
      },
      width: {
        825: "925px",
        250: "250px",
        32: "32px",
      },
      spacing: {
        "space-between": "space-between",
      },
      backgroundImage: {
        "gold-background": "url('./assets/gold-logo-background.svg')",
      },
      fontSize: {
        title: ["57px"],
        titleLogo: ["60px"],
        mobileTitle: ["27px"],
        emailLarger: ["39px"],
      },
      lineHeight: {
        "title-text": "63px",
        "paragraph-text": "37px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
