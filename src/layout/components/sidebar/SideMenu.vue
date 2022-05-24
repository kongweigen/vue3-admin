<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-12 22:05:15
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-24 22:18:22
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
    :router="true"
  >
    <div class="logo" :class="{ close: appStore.collapse }">
      <span v-if="!appStore.collapse">桃根管理</span>
      <img v-else src="@/assets/images/header/logo.png" />
    </div>
    <SubMenu :menuItem="menuItem" v-for="menuItem in menuList"></SubMenu>
  </el-menu>
</template>

<script setup lang="ts">
import SubMenu from './SubMenu.vue'
import { useAppStore } from '@/stores/app'
import type { Menu } from '@/types'
import { ref } from 'vue'
import menuData from '@/mock'
const appStore = useAppStore()

const menuList = ref(menuData as Array<Menu>)
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
