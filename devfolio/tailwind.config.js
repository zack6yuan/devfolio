/* eslint-env commonjs */

/** @type {import('tailwindcss').Config} */
module.exports = { // <--- Changed from 'export const'
  content: [
    // Specify the files Tailwind should scan for class names.
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    // Extend or override Tailwind's default theme here
    extend: {
      screens: {
        'xs': '475px', // This is now correctly registered
      },
    },
  },
  plugins: [
    // Add any official or third-party Tailwind plugins here
  ],
};