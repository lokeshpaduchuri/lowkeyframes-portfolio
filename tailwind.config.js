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
        mint: '#1DB954',
        surface: '#1A1A1A',
        light: '#EAEAEA',
        border: '#333333',
      },
    }
  },
  plugins: [],
}
