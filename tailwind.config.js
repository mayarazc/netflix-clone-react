/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chinese-black': '#141414',
        'gray': '#808080',
        'gray90': '#E5E5E5',
      },
      spacing: {
        '999': '9999px',
        '35': '48rem',
      },
    },
  },
  plugins: [],
}

