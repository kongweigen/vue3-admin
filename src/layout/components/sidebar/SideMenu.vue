<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-12 22:05:15
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-19 23:24:37
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\layout\components\sidebar\SideMenu.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <el-menu
    class="container"
    background-color="#2c2f32"
    active-text-color="#ffd04b"
    text-color="#fff"
    :collapse="appStore.collapse"
  >
    <div class="logo" :class="{ close: appStore.collapse }">
      <span v-if="!appStore.collapse">桃根管理</span>
      <img v-else src="../../../assets/images/header/logo.png" />
    </div>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>菜单1</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <template #title>菜单2</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
// import SideLogo from './SideLogo.vue'
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()
</script>
<style lang="scss" scoped>
.container {
  border: none;
  height: 100vh;
  .logo {
    height: 60px;
    background-color: #2c2f32;
    color: #fff;
    text-align: center;
    line-height: 60px;
    overflow: hidden;
    &.close {
      width: 64px;
    }
    span {
      font-weight: 600;
      font-size: 24px;
    }
    img {
      width: 25px;
    }
  }
}
</style>
