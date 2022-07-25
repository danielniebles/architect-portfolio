/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": {
          50: "#e9eef5",
          100: "#cad5de",
          200: "#aab8c6",
          300: "#8a9cad",
          400: "#72879b",
          500: "#5a7389",
          DEFAULT: "#4d6578",
          700: "#3e5162",
          800: "#2f3f4c",
          900: "#1e2b35",
        },
        "light-gray": {
          50: "#f5fdff",
          100: "#f0f8fa",
          200: "#ecf3f5",
          300: "#e2e9ec",
          400: "#c0c7c9",
          500: "#a2a9ab",
          600: "#797f81",
          700: "#646b6d",
          DEFAULT: "#454b4d",
          900: "#24292b",
        },
        creamy: {
          50: "#f6fef0",
          100: "#f1f9eb",
          200: "#ecf4e6",
          300: "#e1e9db",
          400: "#bfc6b9",
          DEFAULT: "#a1a89b",
          600: "#787e72",
          700: "#636a5e",
          800: "#444a3f",
          900: "#23281e",
        },
      },
      gridTemplateColumns: {
        "gallery": "repeat(auto-fit, minmax(200px, 1fr))",
        "services": "repeat(auto-fit, minmax(320px, 1fr))",
      },
      gridAutoRows: {
        'gallery': '250px',
      },
      backgroundImage: {
        'building': "url('https://wallpaper.dog/large/20506681.jpg')",
      }
    },
  },
  plugins: [],
};
