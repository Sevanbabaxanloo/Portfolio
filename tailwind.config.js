/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/component/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '2': 'repeat(2, 1fr)',
        '3': 'repeat(3, 1fr)',
      },
    },
  },
  plugins: [],
};