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

    function enableShadowCss(config) {
      const configs = [
        config.module.rule('vue').use('vue-loader'),
        config.module.rule('css').oneOf('vue-modules').use('vue-style-loader'),
        config.module.rule('css').oneOf('vue').use('vue-style-loader'),
        config.module.rule('css').oneOf('normal-modules').use('vue-style-loader'),
        config.module.rule('css').oneOf('normal').use('vue-style-loader'),
        config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader'),
        config.module.rule('postcss').oneOf('vue').use('vue-style-loader'),
        config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader'),
        config.module.rule('postcss').oneOf('normal').use('vue-style-loader'),
        config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader'),
        config.module.rule('scss').oneOf('vue').use('vue-style-loader'),
        config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader'),
        config.module.rule('scss').oneOf('normal').use('vue-style-loader'),
        config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader'),
        config.module.rule('sass').oneOf('vue').use('vue-style-loader'),
        config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader'),
        config.module.rule('sass').oneOf('normal').use('vue-style-loader'),
        config.module.rule('less').oneOf('vue-modules').use('vue-style-loader'),
        config.module.rule('less').oneOf('vue').use('vue-style-loader'),
        config.module.rule('less').oneOf('normal-modules').use('vue-style-loader'),
        config.module.rule('less').oneOf('normal').use('vue-style-loader'),
        config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader'),
        config.module.rule('stylus').oneOf('vue').use('vue-style-loader'),
        config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader'),
        config.module.rule('stylus').oneOf('normal').use('vue-style-loader'),
      ];
      configs.forEach(c => c.tap(options => {
        options.shadowMode = true;
        return options;
      }));
    }

    enableShadowCss(config)
  }

}
