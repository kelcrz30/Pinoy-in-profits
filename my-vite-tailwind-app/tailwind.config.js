/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // If you have an index.html file in your root
    "./src/**/*.{js,ts,jsx,tsx}", // For JavaScript/TypeScript files in a 'src' folder
    // Add other paths here if you have different file types or locations, e.g.:
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // "./*.{html,js}", // If your HTML and JS files are directly in the root
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}