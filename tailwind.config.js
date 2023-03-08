/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        quicksans: ['Quicksand', 'sans-serif'],
        rochester: ['Rochester', 'cursive']
      }
    },
  },
  plugins: [],
}
