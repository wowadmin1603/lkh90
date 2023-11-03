/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        barlowC: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        primary: "#112072",
        secondary: "#E39100",
        red: "#E6435C",
        black: "#000",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
