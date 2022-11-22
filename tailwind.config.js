module.exports = {
  important: '.zenuml',
  content: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      overflow: ['hover', 'focus'],
      whitespace: ['hover', 'focus'],
      display: ['group-hover'],
    },
  },
  plugins: [],
}
