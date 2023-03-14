/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "media",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    colors: {
      white: "#FFF",
      ashSidebar: "##FBF9F9",
      ash: "#62656C",
      ashLight: "#D9D9D9",
      ashDark: "#545454",
      ashDarkText: "#8C8C8C",
      ashBg: "#E8E8E8",
      sky: "#2A36B8",
      skyBg: "#E8ECF4",
      skyLight: "#10D4FF",
      skyDark: "#2A36a4",
      black: colors.black,
      slate: colors.slate,
      gray: colors.gray,
      cyan: colors.cyan,

      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
