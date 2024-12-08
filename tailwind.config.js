/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hBlack: "#0D0D0D",
        hWhite: "#F2F2F2",
        hGray: "#D9D9D9",
        hBlue: "#0066FF",
        hLightBlue: "#00A3FF",
        hGreen: "#00FF94",
      },
      animation: {
        'scroll': 'scroll 25s linear infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-75px * 16))' }
        },
        'ping': {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
