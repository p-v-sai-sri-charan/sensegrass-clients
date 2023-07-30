/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FBEBDB',
        'secondary': '#634832',
        'text': '#CDB7A4',
        'text2': '#A7A7A7',
        'dash':'#F9F4F0',
      },
    },
  },
  plugins: [],
}