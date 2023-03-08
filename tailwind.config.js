/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'terra-green': {
          50: '#f8fae4',
          100: '#eef2bc',
          200: '#e2ea91',
          300: '#d5e263',
          400: '#ccdb3e',
          DEFAULT: '#c3d500',
          600: '#b7c300',
          700: '#a6ae00',
          800: '#969700',
          900: '#7b7100',
        },
        'terra-blue': {
          50: '#e1f6fe',
          100: '#b3e8fb',
          200: '#81d9f7',
          300: '#4dcaf0',
          400: '#26bfe9',
          500: '#0cb4e2',
          DEFAULT: '#00a5ce',
          700: '#0091b3',
          800: '#007d9a',
          900: '#005b6d',
        },
        'title-gray': '#484a46',
        'body-gray': '#787976',
      },
      gridTemplateColumns: {
        gallery: 'repeat(auto-fit, minmax(200px, 1fr))',
        services: 'repeat(auto-fit, minmax(320px, 1fr))',
      },
      gridAutoRows: {
        gallery: '250px',
      },
      backgroundImage: {
        building: "url('https://wallpaper.dog/large/20506681.jpg')",
        construction:
          "url('https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
      },
    },
  },
  plugins: [],
};
