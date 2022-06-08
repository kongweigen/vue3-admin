/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-28 15:35:59
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-06-08 21:46:19
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\api\user\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
 */
import request from '@/utils/request'
import type { User } from '@/types'

export function queryUserList(params?: any): any {
  return request({
    url: '/api/v1/user/queryList',
    params
  })
}

export function createUser(data: User): any {
  return request({
    url: '/api/v1/user/create',
    method: 'post',
    data
  })
}

export function queryUserDetail(id: string): any {
  return request({
    url: '/api/v1/user/queryById',
    params: {
      id
    }
  })
}

export function deleteUserById(id: string): any {
  return request({
    url: '/api/v1/user/deleteById',
    method: 'post',
    data: {
      id
    }
  })
}
export function userLogin(name: string, password: string): any {
  return request({
    url: '/api/v1/user/userLogin',
    method: 'post',
    data: {
      name,
      password
    }
  })
}
