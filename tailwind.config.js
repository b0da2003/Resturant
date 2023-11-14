/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        mainBG: 'url("../img/bg.png")',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
