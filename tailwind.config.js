/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1877F2',
        second: '#f0f2f5',
        hover: '#d8dadf',
        "header-bg": 'white' 
      }
    },
  },
  plugins: [],
}