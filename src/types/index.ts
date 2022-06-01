export interface Menu {
  id: string
  url: string
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
