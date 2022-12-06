module.exports = {
  important: '.zenuml',
  content: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          title: 'var(--color-text-title)',
          participant: 'var(--color-text-participant)',
          message: 'var(--color-text-message)',
          "message-arrow": 'var(--color-message-arrow)', // message arrow head
          "message-hover": 'var(--color-text-message-hover)',
          comment: 'var(--color-text-comment)',
          fragment: 'var(--color-text-fragment)',
          base: 'var(--color-text-base)',
          header: 'var(--color-text-header)',
          secondary: 'var(--color-text-secondary)',
          control: 'var(--color-text-control)',
          muted: 'var(--color-text-muted)',
          hover: 'var(--color-text-hover)',
          link: `var(--color-text-link)`,
          fill: `var(--color-text-fill)`,
        },
      },
      backgroundColor: {
        skin: {
          canvas: 'var(--color-bg-canvas)',
          frame: 'var(--color-bg-frame)',
          title: 'var(--color-bg-title)',
          participant: 'var(--color-bg-participant)',
          lifeline: 'var(--color-border-participant)',
          divider: 'var(--color-border-participant)',
          "message-hover": 'var(--color-bg-message-hover)',
          "fragment-header": 'var(--color-bg-fragment-header)',
          occurrence: 'var(--color-bg-occurrence)',
          base: 'var(--color-bg-base)',
          secondary: 'var(--color-bg-secondary)',
          hover: 'var(--color-bg-hover)',
          fill: 'var(--color-bg-fill)',
        },
      },
      borderColor: {
        skin: {
          frame: 'var(--color-border-frame)',
          participant: 'var(--color-border-participant)',
          "message-arrow": 'var(--color-message-arrow)', // message arrow line
          fragment: 'var(--color-border-fragment)',
          occurrence: 'var(--color-border-occurrence)',
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
