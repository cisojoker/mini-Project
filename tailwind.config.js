/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost": ["Jost", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
      },
      keyframes: {
        'up-down': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        alert: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(12rem)' },
          '100%': { transform: 'translateY(11rem)' },
        }
      },
      animation: {
        'up-down': 'up-down 1s ease-in-out infinite',
        'alert': 'alert 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
