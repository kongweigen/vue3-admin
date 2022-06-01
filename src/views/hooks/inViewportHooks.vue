<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-24 21:57:53
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-25 20:54:12
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\views\hooks\inViewportHooks.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <h2>inViewportHooks 案例</h2>
    <h2>{{ inViewport ? '出现' : '消失' }}</h2>
    <div class="container">
      <div class="box h-1000"></div>
      <div id="box" class="box"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useInViewport } from '@/hooks/useInViewport'

let inViewport = ref(false)

useInViewport(() => document.getElementById('box'), {
  onEnter() {
    console.log('onEnter1')
    inViewport.value = true
  },
  onLeave() {
    console.log('onLeave1')
    inViewport.value = false
  }
})
</script>
<style scoped lang="scss">
.container {
  height: 500px;
  overflow-y: auto;
}
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
