/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {},
    container:{
      center:true,
      padding:{
        DEFAULT: '35px',
      }
    },
    fontFamily: {
      'Poppins': ["Poppins", 'serif'],
    }
  },
  plugins: [],
}