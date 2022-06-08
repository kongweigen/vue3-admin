<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-19 23:27:06
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-06-08 22:08:48
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\layout\components\sidebar\subMenu.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <el-sub-menu
    :index="menuItem.url"
    v-if="menuItem.childList && menuItem.childList.length > 0"
  >
    <template #title>
      <el-icon v-if="menuItem.icon"
        ><component :is="menuItem.icon"></component
      ></el-icon>
      <span>{{ menuItem.name }}</span>
    </template>
    <SubMenu
      :menuItem="subItem"
      v-for="subItem in menuItem.childList"
    ></SubMenu>
  </el-sub-menu>
  <el-menu-item :index="menuItem.url" v-else @click="menuClick(menuItem)">
    <el-icon v-if="menuItem.icon"
      ><component :is="menuItem.icon"></component
    ></el-icon>
    <span>{{ menuItem.name }}</span>
  </el-menu-item>
</template>
<script lang="ts" setup>
import type { Menu } from '@/types'
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()
defineProps<{
  menuItem: Menu
}>()

const menuClick = (menuItem: Menu) => {
  appStore.addRouteList({
    name: menuItem.name,
    path: menuItem.url
  })
}
</script>
