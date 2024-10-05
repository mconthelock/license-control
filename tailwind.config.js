/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./application/views/**/*.php", "./assets/script/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#ff0000",
          secondary: "#000000",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#ff0000",
          secondary: "#000000",
        },
      },
    ],
  },
};
