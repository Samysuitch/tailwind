/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Source files
    './components/**/*.{js,ts,jsx,tsx}', // Components directory
    './public/**/*.html', // Public HTML files
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
