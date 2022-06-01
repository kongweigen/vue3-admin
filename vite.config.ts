import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 在根目录下的vite.config.ts修改server属性
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://47.98.53.46:7001'
      },
      
    }
  }
})
