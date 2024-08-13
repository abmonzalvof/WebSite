/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Barlow']
    },
    extend: {
      colors:{
        'mintcream': {
          140: 'rgb(243,255,249,0.70)',
          300: 'rgb(243,255,249,0.60)',
          500: '#F3FFF9'
        },
        'sapphire': {
          225: 'rgb(41,80,178,0.45)',
          500: '#2950B2'
        },
        'periwinkle': {
          125: 'rgb(216,195,255,0.25)',
          150: 'rgb(216,195,255,0.30)',
          300: 'rgb(216,195,255,0.60)',
          500: '#D8C3FF'
        },
        'richblack': {
          500: '#01071B'
        },
        'raisinblack': {
          500: '#1C1A1F'
        }
      },},
  },
  plugins: [],
}