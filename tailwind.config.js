/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./application/views/**/*.php", "./assets/script/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "LINE Seed EN",
          "LINE Seed EN Bold",
          "LINE Seed TH",
          "LINE Seed TH Bold",
          "LINE Seed JP",
          "LINE Seed JP Bold",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require("tailwindcss-bg-patterns"),
    //require("tailwindcss-gradients"),
  ],
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
