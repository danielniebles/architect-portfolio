/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'light-blue': '#4d6578',
        'light-gray': '#454b4d',
        'creamy': '#a1a89b'
      },
    },
  },
  plugins: [],
}
