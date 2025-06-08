// tailwind.config.cjs
const aspectRatio = require('@tailwindcss/aspect-ratio');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        goride: ['MyFont', 'sans-serif'],
        dmserif: ['"DM Serif Text"', 'serif'],
      }
    },
  },
  plugins: [aspectRatio],
};
