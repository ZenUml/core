const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  configureWebpack: {
    entry: ['./src/main.js'],
    externals: {
      'sequenceParser': 'sequence-parser'
    },
    plugins: [
      new UglifyJsPlugin()
    ]
  }
};