const {fontFamily} = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      '110':'110%',
      '100' : '100%',
      '90' : '90%',
      '80' : '80%',
      '70' : '70%',
      '60' : '60%',
      '50' : '50%',
      '40' : '40%',
      '35' : '35%',
      '30' : '30%',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}
