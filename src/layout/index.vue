<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-12 21:07:44
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-24 22:43:27
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\layout\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <el-container>
    <el-aside :width="appStore.collapse ? '64px' : '200px'"
      ><Sidebar></Sidebar
    ></el-aside>
    <el-container class="container">
      <el-header><Header></Header></el-header>
      <Tags></Tags>
      <div class="app-main">
        <router-view></router-view>
      </div>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import Sidebar from './components/sidebar/index.vue'
import Header from './components/header/index.vue'
import Tags from './components/tags/index.vue'
const appStore = useAppStore()
</script>
<style lang="scss" scoped>
.el-header {
  padding: 0;
}
.el-aside {
  transition: all 0.5s ease 0s;
}
.el-container {
  &.container {
    padding: 0 10px;
  }
  .app-main {
    height: calc(100vh - 80px);
    overflow-y: auto;
  }
}
</style>
