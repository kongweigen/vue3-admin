/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-19 22:56:50
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-06-08 22:20:24
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\stores\app.ts
 * @Description:
 *
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import type { RouterInfo } from '@/types'
import router from '@/router'

export const useAppStore = defineStore({
  id: 'appStore',
  state: () => {
    return {
      collapse: false,
      routeList: [{ name: '首页', path: '/home' }] as RouterInfo[],
      currentRouter: { name: '首页', path: '/home' } as RouterInfo
    }
  },
  actions: {
    updateCollapse(val: boolean) {
      this.collapse = val
    },
    addRouteList(data: RouterInfo) {
      let r = this.routeList.find((item) => item.path === data.path)
      if (!r) {
        this.currentRouter = Object.assign({}, data)
        this.routeList.push(data)
      }
    },
    removeRoute(path: string) {
      debugger
      let idx: number = -1
      this.routeList.forEach((item, index) => {
        item.path === path && (idx = index)
      })
      if (idx != -1) {
        this.routeList.splice(idx, 1)
      }
      if (this.routeList.length === 0) {
        this.routeList.push({ name: '首页', path: '/home' })
        this.currentRouter = { name: '首页', path: '/home' }
      } else {
        router.push(this.routeList[this.routeList.length - 1].path)
        this.currentRouter = Object.assign(
          {},
          this.routeList[this.routeList.length - 1]
        )
      }
    }
  }
})
