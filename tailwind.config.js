const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode:'jit',
  purge: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
          screens:{
        'SS':"450px",
        'Sl':"525px",
        'Xl':"880px",
        ...defaultTheme.screens
      },
    extend: {
      colors:{
        ...colors
      },
      fontFamily:{
        jetMono : 'JetBrains Mono, monospace' ,
        round: 'Nova Round, cursive'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
