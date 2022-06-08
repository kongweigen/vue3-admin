/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-19 23:29:54
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-06-08 21:49:40
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
 */
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
        // target: 'http://127.0.0.1:7001'
      },
      
    }
  }
})
