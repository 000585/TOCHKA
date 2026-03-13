/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html}",
    "./src/_includes/**/*.njk",
    "./src/_includes/components/**/*.njk",
    "./src/_includes/layouts/**/*.njk"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#22d3ee',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}