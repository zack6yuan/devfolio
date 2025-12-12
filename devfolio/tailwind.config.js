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
      'coolvetica': ['Coolvetica', 'sans-serif'],
      'coolvetica-light': ['Coolvetica-Light', 'sans-serif'],
      'moralana': ['Moralana', 'sans-serif'],
    },
  },
};
export const plugins = [];