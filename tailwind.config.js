module.exports = {
  purge: ['themes/qbs/layouts/**/*.html', 'layouts/**/*.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray': {
          DEFAULT: '#5E5E5E',
          '50': '#D1D1D1',
          '100': '#C4C4C4',
          '200': '#ABABAB',
          '300': '#919191',
          '400': '#787878',
          '500': '#5E5E5E',
          '600': '#454545',
          '700': '#2B2B2B',
          '800': '#121212',
          '900': '#000000'
        },
      },
    },
    fontFamily: {
      'display': ['Inter', 'system-ui'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
