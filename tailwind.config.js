/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#187A77',
        bg1: '#FAFFFF',
        textColor: '#0E4947'
      }
    },
  },
  plugins: [],
}