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
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      fontFamily:{
        jetMono : 'JetBrains Mono, monospace' ,
        round: 'Nova Round, cursive',
        comma: 'Finger Paint, cursive'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/line-clamp'),
    ],
}
