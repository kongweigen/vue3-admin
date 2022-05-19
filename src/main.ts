/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-12 20:20:58
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-19 23:06:01
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\main.ts
 * @Description:
 *
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved.
 */
import { createApp } from 'vue'
import stores from '@/stores'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

function bootstrap() {
  const app = createApp(App)
  app.use(ElementPlus)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(stores)
  app.use(router)
  app.mount('#app')
}

bootstrap()
