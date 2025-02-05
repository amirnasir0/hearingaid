/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  plugins: [require("tailwind-scrollbar-hide")],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

