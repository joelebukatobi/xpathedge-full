/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      Mulish: ['Mulish', 'sans-serif'],
      IBMPlexMono: ['IBM Plex Mono', 'monospace'],
    },
    // colors: {
    //   white: '#ffffff',
    //   black: '#191919',
    //   red: '#AA0000',
    //   zicron: '#DBE8E9',
    //   grey: '#676767',
    // },
    extend: {},
  },
  plugins: [],
};
