import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // base: "./",
  plugins: [
    Vue(),
    Components({
      resolvers: [
        IconsResolver(),
      ],
    }),
    Icons(),
  ],
  resolve: {
    alias: {
      // ref: https://ithelp.ithome.com.tw/articles/10293243?sc=rss.iron
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
