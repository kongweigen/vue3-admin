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
