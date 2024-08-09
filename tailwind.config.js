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
        'mintcream': '#F3FFF9',
        'sapphire': '#2950B2',
        'periwinkle': '#D8C3FF',
        'richblack': '#01071B',
        'raisinblack': '#1C1A1F'
      },
    },
  },
  plugins: [],
}