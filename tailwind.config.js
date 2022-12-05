module.exports = {
  important: '.zenuml',
  content: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          header: 'var(--color-text-header)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          hover: 'var(--color-text-hover)',
          link: `var(--color-text-link)`,
          fill: `var(--color-text-fill)`,
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          secondary: 'var(--color-bg-secondary)',
          hover: 'var(--color-bg-hover)',
          fill: 'var(--color-bg-fill)',
        },
      },
      borderColor: {
        skin: {
          base: 'var(--color-border-base)',
          secondary: 'var(--color-border-secondary)',
        },
      },
      gradientColorStops: {
        skin: {
          base: 'var(--color-bg-base)',
          secondary: 'var(--color-bg-secondary)',
        },
      },
    },
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
