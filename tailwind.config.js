/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#273C52",  
        secondary: "#aba9a4",
        accent: "#e74c3c", 
        highlight: "#f1c40f", 
      },
    },
  },
  plugins: [],
};