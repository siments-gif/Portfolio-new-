/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    
    colors: {
      'navy-blue': '#282D3C',
      'rose-red': '#B93A32',
      'mellow-white': '#EFFDFF',
      'smoke-dark-gray': '#141414',
    }
  },
  plugins: [require('tailwind-scrollbar')],
}