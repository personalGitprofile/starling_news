/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      'display': ['ui-sans-serif', 'system-ui', ],
      
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}