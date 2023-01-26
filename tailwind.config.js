/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chestnut': {
          DEFAULT: '#BA4949',
          50: '#ECCECE',
          100: '#E7BFBF',
          200: '#DCA2A2',
          300: '#D08484',
          400: '#C56767',
          500: '#BA4949',
          600: '#933838',
          700: '#6A2828',
          800: '#421919',
          900: '#190A0A'
        },
      }
    },
  },
  plugins: [],
}
