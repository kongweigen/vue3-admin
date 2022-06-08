/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-24 23:15:12
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-06-08 21:48:00
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\types\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
 */
export interface Menu {
  id: string
  url: string
  icon?: string
  name: string
  childList: Array<Menu>
}

export interface RouteInfo {}

// 用户
export interface User {
  _id: string
  name: string
  password: string
  address: string
  age: number
  createTime: number
}

export interface UserSearch {
  _id: string
  name: string
}

export interface RouterInfo {
  name:string
  path:string
}