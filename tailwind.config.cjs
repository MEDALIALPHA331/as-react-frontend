/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1100px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
