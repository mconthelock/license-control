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
          primary: "#3B82F6",
          secondary: "#E2E8F0",
          accent: "#E2E8F0",
          muted: "#E2E8F0",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#2563EB",
          secondary: "#1E293B",
          accent: "#1E293B",
          muted: "#1E293B",
        },
      },
    ],
  },
};
