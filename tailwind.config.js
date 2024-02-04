/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   
  ],
  theme: {

    extend: {
      screens: {
        'xs': '475px',
      },
    },
  },
  variants: {
    extended: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    }
  },
  plugins: [
    
  ],


}
