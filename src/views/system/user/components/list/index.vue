<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-12 20:35:00
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-24 23:08:35
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\views\home\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="_id" label="ID" />
    <el-table-column prop="name" label="用户名" />
    <el-table-column prop="password" label="密码" />
    <el-table-column prop="age" label="年龄" />
    <el-table-column prop="address" label="地址" />
    <el-table-column prop="address" label="地址" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          class="p-l-0"
          type="primary"
          text
          @click="operateHandler(scope.row, 'view')"
          >详情</el-button
        >
        <el-button
          type="primary"
          text
          @click="operateHandler(scope.row, 'update')"
          >编辑</el-button
        >
        <el-button
          type="primary"
          text
          @click="operateHandler(scope.row, 'delete')"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import type { User } from '@/types'

defineProps<{
  list: User[]
}>()
const emit = defineEmits(['operate-handler'])
const operateHandler = (row: User, type: string) => {
  emit('operate-handler', { row, type })
}
</script>
<style lang="scss" scoped></style>
