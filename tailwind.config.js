/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2lg': '1170px', 
        'xs': '400px', 
        '2sm': '550px', 
        '2md': '880px', 
        '3md': '900px', 
        '3lg': '1342px', 
      },
    },
  },
  plugins: [],
}