
module.exports = {

  configureWebpack: {
    entry: ['./src/index.js'],
    externals: {
      'sequence-parser': 'sequence-parser'
    }
  }
};