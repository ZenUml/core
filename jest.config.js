module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  "testMatch": [
    "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      }
    },
    VERSION: '1.2.3',
    BUILD_TIME: 'Just now'
  }
}
