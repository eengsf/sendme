/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clicker: ['Clicker Script'],
        poppins: ['Poppins'],
      },
      animation: {
        slideIn: 'slideIn 1s ease both',
        slideOut: 'slideOut 1s ease both',
      },
      keyframes: {
        slideIn: {
          'from': {
            transform: 'translateX(100%)'
          },
          'to': {
            transform: 'translateX(0)'
          },
        },
        slideOut: {
          'from': {
            transform: 'translateX(0)'
          },
          'to': {
            transform: 'translateX(100%)'
          },
        },
      },
    },
  },
  plugins: [],
}

