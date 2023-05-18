/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        flow: {
          '0%': { transform: 'translateX(-400px)' },
          // '50%': { transform: 'translateX(400px)' },
          '100%': { transform: 'translateX(400px)' },
        },
        flowRevert: {
          '0%': { transform: 'translateX(400px)' },
          // '50%': { transform: 'translateX(-400px)' },
          '100%': { transform: 'translateX(-400px)' },
        },
      },
      animation: {
        flow1: 'flow 10s linear infinite',
        flow2: 'flow 15s linear infinite',
        flow3: 'flowRevert 18s linear infinite',
      },
    },
  },
  plugins: [],
}
