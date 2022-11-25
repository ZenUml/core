module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  "testMatch": [
    "**/__tests__/**/*.[jt]s?(x)", "**/(test|src)/**/?(*.)+(spec|test).[jt]s?(x)", "vue.config.spec.js"
  ],
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true
    },
    VERSION: '1.2.3',
    BUILD_TIME: 'Just now',
  }
}
