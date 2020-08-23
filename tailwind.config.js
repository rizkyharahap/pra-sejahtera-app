module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      height: {
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
      },
      fontSize: {
        '7xl': '5rem',
      },
      lineHeight: {
        11: '3rem',
      },
      flex: {
        2: '1 1 18rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
