/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D0D0D',
        neon: '#00FF88',
        mintDark: '#1DB954',
        surface: '#1A1A1A',
        light: '#EAEAEA',
        border: '#333333',
        champagne: '#FDEAE7',
        peach: '#FFBE98',
        lavender: '#E8EAF6',
        mint: '#EDFDF4',
        lemon: '#FFFACD',
        ivory: '#F9F6EE',
        aqua: '#B2F5EA',
        charcoal: '#2D3748',
        emerald: '#4ADE80',
        graphite: '#1E1E2F',
        midnight: '#2C3E50',
        lilac: '#D5C6E0',
      },
      boxShadow: {
        'neon-green': '0 0 10px #4ADE80',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    }
  },
  plugins: [],
}
