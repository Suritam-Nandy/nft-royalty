/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      graySidebar: "##FBF9F9",
      gray: "#62656C",
      grayLight: "#D9D9D9",
      grayDark: "#545454",
      grayDarkText: "#8C8C8C",
      grayBg: "#E8E8E8",
      blue: "#2A36B8",
      blueBg: "#E8ECF4",
      blueLight: "#10D4FF",
      blueDark: "#2A36a4",
      custom: {
        DEFAULT: "#10B981",
        light: "#D1FAE5",
      },
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
