/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        dark: {
          bg: '#1b1b1f',
          'bg-alt': '#161618',
          elevated: '#202127',
          border: '#3c3f44',
          divider: '#2e2e32',
        },
        text: {
          primary: 'rgba(255, 255, 245, 0.86)',
          secondary: 'rgba(235, 235, 245, 0.6)',
        },
        brand: {
          indigo: '#3451b2',
          'indigo-light': '#3a5ccc',
          'indigo-lighter': '#5672cd',
        },
        accent: {
          purple: '#c8abfa',
          'purple-dark': '#a879e6',
          'purple-darker': '#8e5cd9',
          green: '#3dd68c',
          'green-dark': '#30a46c',
          'green-darker': '#298459',
          yellow: '#f9b44e',
          'yellow-dark': '#da8b17',
          'yellow-darker': '#a46a0a',
          red: '#f66f81',
          'red-dark': '#f14158',
          'red-darker': '#b62a3c',
        }
      },
      lineHeight: {
        'base': '1.4',
      },
      fontSize: {
        'base': ['16px', '24px'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
