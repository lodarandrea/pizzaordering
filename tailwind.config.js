/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        flow: {
          '0%': { transform: 'translateX(0px)' },
          // '50%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(20px)' },
        },
      },
      animation: {
        flow: 'flow 1s linear infinite',
      },
    },
  },
  plugins: [],
}
