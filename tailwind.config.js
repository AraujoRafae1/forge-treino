/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070c0b',
          900: '#0b1311',
          850: '#0f1a17',
          800: '#14221f',
          700: '#1e332e',
          600: '#2d4b44'
        },
        brand: {
          green: '#10b981',
          emerald: '#059669',
          accent: '#22c55e',
          glow: 'rgba(34, 197, 94, 0.25)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
