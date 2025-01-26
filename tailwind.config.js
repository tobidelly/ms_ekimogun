/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        textColorChange: {
          '0%': { color: 'blue' },
          '4.16%': { color: 'gold' },
          '8.33%': { color: 'black' },
          '12.5%': { color: 'red' },
          '16.66%': { color: 'gray' },
          '20.83%': { color: 'yellow' },
          '25%': { color: 'green' },
          '29.16%': { color: 'brown' },
          '33.33%': { color: 'pink' },
          '37.5%': { color: 'purple' },
          '41.66%': { color: 'orange' },
          '45.83%': { color: 'teal' },
          '50%': { color: 'cyan' },
          '54.16%': { color: 'magenta' },
          '58.33%': { color: 'lightblue' },
          '62.5%': { color: 'lime' },
          '66.66%': { color: 'darkgreen' },
          '70.83%': { color: 'violet' },
          '75%': { color: 'indigo' },
          '79.16%': { color: 'turquoise' },
          '83.33%': { color: 'coral' },
          '87.5%': { color: 'peach' },
          '91.66%': { color: 'bronze' },
          '95.83%': { color: 'ivory' },
          '100%': { color: 'chocolate' },
        },
      },
      animation: {
        textColorChange: 'textColorChange 120s infinite',
      },
    },
  },
  plugins: [],
};
