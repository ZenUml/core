import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'

export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html'),
          embed: resolve(__dirname, './public/embed.html'),
        }
      }
    },
    plugins: [vue()],
    test: {
      environment: 'jsdom',
      deps: {
        inline: [
          ''
        ]
      }
    }

  }
)
