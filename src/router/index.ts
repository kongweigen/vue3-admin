/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-12 20:20:58
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-24 22:37:04
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          meta: {
            title: '首页'
          },
          component: Home
        }
      ]
    },
    {
      path: '/hooks',
      component: Layout,
      redirect: '/hooks/hoverHooks',
      children: [
        {
          path: 'hoverHooks',
          name: 'HoverHooks',
          component: () => import('@/views/hooks/hoverHooks.vue')
        },
        {
          path: 'inViewportHooks',
          name: 'InViewportHooks',
          component: () => import('@/views/hooks/inViewportHooks.vue')
        }
      ]
    }
  ]
})

export default router
