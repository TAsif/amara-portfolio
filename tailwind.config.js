module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
          }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
