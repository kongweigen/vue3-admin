<template>
  <el-form class="container" :inline="true" :model="searchForm">
    <el-form-item label="编号">
      <el-input v-model="searchForm._id" placeholder="请输入ID" />
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="searchForm.name" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="queryList">搜索</el-button>
      <el-button>重置</el-button>
      <el-button type="primary" @click="createUser">新建</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { UserSearch } from '@/types'

const searchForm = ref({} as UserSearch)
const emit = defineEmits(['user-dialog', 'query-list'])

const createUser = () => {
  emit('user-dialog', true)
}
const queryList = () => {
  emit('query-list', searchForm)
}
</script>
<style scoped lang="scss">
.container {
  padding: 0 12px;
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
