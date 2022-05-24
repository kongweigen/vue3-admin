<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-24 21:57:53
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-24 23:12:16
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\views\hooks\hoverHooks.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <h2>useHover 案例</h2>
    <div id="box" class="box">{{ isHovering1 }}</div>
    <div ref="boxRef" class="box">{{ isHovering2 }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHover } from '@/hooks/useHover'

const boxRef = ref(null)
const isHovering1 = useHover(() => document.getElementById('box'), {
  onEnter() {
    console.log('onEnter1')
  },
  onLeave() {
    console.log('onLeave1')
  }
})
const isHovering2 = useHover(boxRef, {
  onEnter() {
    console.log('onEnter2')
  },
  onLeave() {
    console.log('onLeave2')
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
</style>
