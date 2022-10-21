const { ESBuildMinifyPlugin } = require('esbuild-loader')
const {execSync} = require("child_process");
process.env.VUE_APP_GIT_HASH = execSync('git rev-parse --short HEAD').toString().trim()
process.env.VUE_APP_GIT_BRANCH = execSync('git branch --show-current').toString().trim();
// saves ~6 seconds on macbook air m1
function useEsBuildForCss(config) {
  // 删除底层 terser, 换用 esbuild-minimize-plugin
  config.optimization.minimizers.delete('terser');

  // 使用 esbuild 优化 css 压缩
  config.optimization
      .minimizer('esbuild')
      .use(ESBuildMinifyPlugin, [{minify: true, css: true}]);
}

// saves ~6 seconds on macbook air m1
function useEsBuildForTs(config) {
  const ruleTs = config.module.rule('ts');
  // clear babel-loader
  ruleTs.uses.clear()

  // add esbuild-loader
  ruleTs.use('esbuild-loader').loader('esbuild-loader')
      .options({
        loader: 'ts', // 如果使用了 ts, 或者 vue 的 class 装饰器，则需要加上这个 option 配置， 否则会报错： ERROR: Unexpected "@"
        target: 'es2015',
        tsconfigRaw: require('./tsconfig.json')
      });
}

// saves ~6 seconds on macbook air m1
function useEsBuildForJs(config) {
  const rule = config.module.rule('js');
  // clear babel-loader
  rule.uses.clear()

  // add esbuild-loader
  rule.use('esbuild-loader').loader('esbuild-loader');
}

module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    },
    embed: {
      entry: 'src/main.ts',
      template: 'public/embed.html',
      filename: 'embed.html'
    },
    smoke: {
      entry: 'src/main.ts',
      template: 'public/smoke.html',
      filename: 'smoke.html'
    },
    smokeReturn: {
      entry: 'src/main.ts',
      template: 'public/smoke-return.html',
      filename: 'smoke-return.html'
    },
    smokeInteraction: {
      entry: 'src/main.ts',
      template: 'public/smoke-interaction.html',
      filename: 'smoke-interaction.html'
    },
    smokeFragmentIssue: {
      entry: 'src/main.ts',
      template: 'public/smoke-fragment-issue.html',
      filename: 'smoke-fragment-issue.html'
    },
    smokeFragment: {
      entry: 'src/main.ts',
      template: 'public/smoke-fragment.html',
      filename: 'smoke-fragment.html'
    },
    smokeCreation: {
      entry: 'src/main.ts',
      template: 'public/smoke-creation.html',
      filename: 'smoke-creation.html'
    }
  },
  chainWebpack: config =>{
    // A workaround that allows npm link or yarn link
    // https://cli.vuejs.org/guide/troubleshooting.html#symbolic-links-in-node-modules
    config.resolve.symlinks(false)
    useEsBuildForJs(config);
    useEsBuildForTs(config);
    useEsBuildForCss(config);

    config.plugin('define').tap((definitions) => {
      definitions[0]['VERSION'] = JSON.stringify(require('./package.json').version);
      definitions[0]['BUILD_TIME'] = JSON.stringify(new Date());
      return definitions;
    });
  },
  configureWebpack: {
    resolve: {
      fallback: {
        "fs": false,
      }
    }
  },
  devServer: {
    allowedHosts: "all",
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 8080,
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws',
    }
  }
}
