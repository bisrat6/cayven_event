const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#C09A6B',
        'brand-blush': '#F8E8E5',
        'brand-dark': '#1A1A1A',
        'brand-light': '#FFFFFF',
        'brand-gray': '#F5F5F5',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
