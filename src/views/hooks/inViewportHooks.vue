<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-24 21:57:53
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-24 22:37:39
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\views\hooks\inViewportHooks.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <h2>inViewportHooks 案例</h2>
    <div class="box h-1000"></div>
    <div id="box" class="box"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useInViewport } from '@/hooks/useInViewport'

useInViewport(() => document.getElementById('box'), {
  onEnter() {
    console.log('onEnter1')
  },
  onLeave() {
    console.log('onLeave1')
  }
})
</script>
<style scoped lang="scss">
.box {
  width: 200px;
  height: 200px;
  border: 1px solid;
  display: flex;
  margin: 20px;
  justify-content: center;
  align-items: center;
}
.h-1000 {
  height: 1000px;
}
</style>
