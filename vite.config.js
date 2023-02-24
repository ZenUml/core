import { resolve } from 'path';
import { defineConfig } from 'vite';
import createVuePlugin from '@vitejs/plugin-vue';
import { execSync } from 'child_process';

function getCypressHtmlFiles() {
  const cypressFolder = resolve(__dirname, 'cy');
  const strings = execSync(`find ${cypressFolder} -name '*.html'`).toString().split('\n');
  // remove empty string
  strings.pop();
  return strings;
}

const cypressHtmlFiles = getCypressHtmlFiles();
console.log(cypressHtmlFiles);

process.env.VITE_COMMIT_HASH = execSync('git rev-parse --short HEAD').toString().trim()
process.env.VITE_GIT_BRANCH = execSync('git branch --show-current').toString().trim()
// https://stackoverflow.com/a/45993185/529187
process.env.VITE_GIT_TAG = execSync('git describe --tags --always --abbrev=0').toString().trim()
console.log(`Building ${process.env.VITE_GIT_HASH} (${process.env.VITE_GIT_BRANCH}) on ${process.env.VITE_GIT_BRANCH}`)

process.env.VITE_SOME_KEY = 'process.env.VITE_SOME_KEY1';
process.env.SOME_KEY = 'process.env.VITE_SOME_KEY2';
export default defineConfig({
  define: {
    'import.meta.env': {
      VITE_SOME_KEY: JSON.stringify('import.meta.env.VITE_SOME_KEY3'),
    },
  },
  build: {
    rollupOptions: {
      input: ['index.html', 'embed.html', ...cypressHtmlFiles],
    },
  },
  resolve: {
    alias: {
      vue: '@vue/compat',
    },
  },
  plugins: [
    createVuePlugin({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2,
          },
        },
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    deps: {
      inline: [''],
    },
  },
});
