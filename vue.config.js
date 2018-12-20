const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  configureWebpack: {
    entry: ['./src/main.js'],
    // externals: {
    //   'sequence-parser': 'commonjs sequence-parser'
    // },
    plugins: [
      // new UglifyJsPlugin()
    ]
  }
};
