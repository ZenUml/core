import { defineConfig } from 'vite';
import { createVuePlugin as vue } from 'vite-plugin-vue2';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/core.ts',
      name: '@zenuml/core',
      fileName: 'zenuml-core',
    },
    rollupOptions: {
      output: [
        {
          format: 'esm',
          sourcemap: true,
          entryFileNames: `zenuml.esm.mjs`,
        },
        {
          name: 'zenuml',
          format: 'umd',
          sourcemap: true,
          entryFileNames: `zenuml.js`,
        },
      ]
    },
  },
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    deps: {
      inline: [''],
    },
  },
});
