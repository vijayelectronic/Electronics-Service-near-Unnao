/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          blue: '#131921',
          light_blue: '#232f3e',
          yellow: '#febd69',
          dark_gray: '#EAEDED',
        }
      }
    },
  },
  plugins: [],
}
