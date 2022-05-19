<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-19 23:27:06
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-19 23:28:12
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
      <span>{{ menuItem.name }}</span>
    </template>
    <SubMenu
      :menuItem="subItem"
      v-for="subItem in menuItem.childList"
    ></SubMenu>
  </el-sub-menu>
  <el-menu-item :index="menuItem.url" v-else>
    <span>{{ menuItem.name }}</span>
  </el-menu-item>
</template>
<script lang="ts" setup>
defineProps<{
  menuItem: object
}>()
</script>
