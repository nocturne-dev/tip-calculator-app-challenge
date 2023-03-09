/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        attribution: "hsl(228, 45%, 44%)",
        error: "hsl(12, 33%, 57%)",
        "strong-cyan": "hsl(172,67%,45%)",
        "very-dark-cyan": "hsl(183, 100%, 15%)",
        "grayish-cyan": "hsl(186, 14%, 43%)",
        "light-grayish-cyan": "hsl(185, 41%, 84%)",
        "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "space-mono": ["Space Mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
