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
  <Search @query-list="queryList" @user-dialog="userDialog"></Search>
  <List :list="list" @operate-handler="operateHandler"></List>
  <el-dialog v-model="dialogVisible" title="新建用户">
    <el-form :model="userForm" :label-width="80">
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="用户名">
            <el-input v-model="userForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="密码">
            <el-input v-model="userForm.password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="年龄">
            <el-input v-model="userForm.age"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="地址">
            <el-input v-model="userForm.address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveUser">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import List from './components/list/index.vue'
import Search from './components/search/index.vue'
import { ref } from 'vue'
import { queryUserList, createUser } from '@/api/user'
import type { User } from '@/types'

const dialogVisible = ref(false)
const userForm = ref({} as User)
const list = ref([] as Array<User>)

const queryList = async () => {
  let rsp = await queryUserList()
  list.value = rsp
}
queryList()

const userDialog = (data: boolean) => {
  dialogVisible.value = data
}

// 创建
const saveUser = async () => {
  await createUser(userForm.value)
  dialogVisible.value = false
  queryList()
}

// 操作
const operateHandler = ({ row, type }: { row: User; type: string }) => {
  if(type === 'view'){

  }
}
</script>
<style lang="scss" scoped></style>
