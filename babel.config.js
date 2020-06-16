module.exports = {
  presets: [
    '@vue/app',
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.4",
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    '@babel/plugin-proposal-optional-chaining'
  ]
}
