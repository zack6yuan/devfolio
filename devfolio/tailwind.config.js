/* eslint-env commonjs */

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,jsx,ts,tsx}",
  "./public/index.html",
];
export const theme = {
  extend: {
    screens: {
      'xs': '475px',
    },
    fontFamily: {
      'moralana': ['Moralana', 'sans-serif'],
      'cascadia': ['Cascadia', 'sans-serif'],
    },
  },
};
export const plugins = [];