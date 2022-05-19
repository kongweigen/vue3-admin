/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-19 22:56:50
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-19 23:06:23
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\stores\app.ts
 * @Description:
 *
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'
export const useAppStore = defineStore({
  id: 'appStore',
  state: () => {
    return { collapse: false }
  },
  actions: {
    updateCollapse(val: boolean) {
      this.collapse = val
    }
  }
})