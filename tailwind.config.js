/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      vs: "300px",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        "1079xl": "1079px",
        "1100xl": "1100px",
        "804xl": "804px",
        "490xl": "490px",

      },
      colors: {
        primary: "#A67A0F",
        siteBG: "#f5f5f5",
        defaultText: "#CACCCF",
        grayBlack: "#25282B",
        yellowWarning: "#F6A609",
        redError: "#FB4E4E",
        light: "#FFEEC4",
        secondaryText: "#52575C",
        brown: "#691413",
        greenSuccess: "#129A48",
        dividerBorder: "#E8E8E8",
        lightGreen: "#72F3A5",

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
