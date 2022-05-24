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
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="expand">
        <template #default="props">
          <el-table :data="props.row.list" style="width: 100%">
            <el-table-column prop="state" label="state" width="180" />
            <!-- <el-table-column width="180">
              <template #default>
                {{ xxx }}
              </template>
            </el-table-column> -->
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const local = 'zh'

watch(
  () => local,
  () => {}
)
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    list: [
      {
        state: "{'zh':'培根', 'es':'tom'}",
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        state: "{'zh':'培根', 'es':'tom'}",
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ]
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const list = ref(tableData)

const process = (list: any) => {
  list.forEach((item: any) => {
    item.list &&
      item.list.forEach((subItem: any) => {
        if (subItem.state) {
          subItem.state = { zh: '培根', es: 'tom' }[local]
        }
      })
  })
}

process(list.value)
</script>
<style lang="scss" scoped></style>
