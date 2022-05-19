<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-12 21:47:33
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-19 23:05:46
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\layout\components\header\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <div class="container">
    <img
      @click="switchMenu"
      class="img-open"
      src="../../../assets/images/header/collapse.png"
    />
    <div>
      <el-switch
        :class="[isDark ? '' : 'light']"
        v-model="isDark"
        active-color="#2c2c2c"
        inactive-color="#f2f2f2"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
      />
      <span>扩展按钮</span>
      <span>头像</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()

const switchMenu = () => {
  appStore.updateCollapse(!appStore.collapse)
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-size: 14px;
  border-bottom: 1px solid #e6e6e6;
  .img-open {
    width: 35px;
    transform: rotate(180deg);
    transition: all 0.5s ease;
    &.close {
      transform: rotateX(180deg);
    }
  }
  :deep(.el-switch__core) {
    border-color: #dfe2e8 !important;
  }
  .light {
    :deep(.el-switch__core .el-switch__inner .is-icon, .el-switch__core
        .el-switch__inner
        .is-text) {
      color: #000;
    }
  }
}
</style>
