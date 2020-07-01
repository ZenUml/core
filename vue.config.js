module.exports = {
  css: { extract: true },
  chainWebpack: config =>{
    // A workaround that allows npm link or yarn link
    // https://cli.vuejs.org/guide/troubleshooting.html#symbolic-links-in-node-modules
    config.resolve.symlinks(false)

    // We need to clear the pre-built svg rule
    // use `vue-cli-service inspect to check the webpack
    // the built-in webpack uses file-loader
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear();
        svgRule
          //.test(/\.svg$/)  // this is not required because the built-in svg rule already defined `test`
          .use('svg-url-loader')
          .loader('svg-url-loader')
          .end()
  }

}
