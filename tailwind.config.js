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
        flow1: 'flow 10s ease-in-out infinite',
        flow2: 'flow 20s ease-in-out infinite',
        flow3: 'flowRevert 30s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
