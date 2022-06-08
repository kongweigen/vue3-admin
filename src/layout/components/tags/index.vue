<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-19 23:29:54
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-06-08 22:08:09
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\layout\components\tags\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <div class="container">
    <el-tabs
      v-model="appStore.currentRouter.path"
      type="card"
      closable
      class="demo-tabs"
      @tab-remove="tabRemove"
      @tab-change="tabClick"
    >
      <el-tab-pane
        v-for="item in appStore.routeList"
        :key="item.name"
        :label="item.name"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'

const appStore = useAppStore()
const router = useRouter()

const tabRemove = (path: string) => {
  appStore.removeRoute(path)
}
const tabClick = (paneName: string) => {
  router.push(paneName)
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 20px;
}
</style>
