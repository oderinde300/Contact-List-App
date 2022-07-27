/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5180F6',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      height: {
        boxHeight: '32rem'
      }
    },
  },
  plugins: [],
}
