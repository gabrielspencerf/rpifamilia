/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './index.tsx', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f1f5f9',
          700: '#1e293b',
          800: '#151e32',
          900: '#0b1120',
          950: '#020617',
        },
        gold: {
          400: '#e5c578',
          500: '#c5a059',
          600: '#9e7e36',
          700: '#7a6028',
          800: '#5c481e',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(197, 160, 89, 0.15)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
