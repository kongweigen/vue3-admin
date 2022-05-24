/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-24 21:21:06
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-24 22:37:20
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\mock\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
 */
export default [
  {
    id: '1',
    name: '首页',
    icon: 'HomeFilled',
    url: '/',
    childList: []
  },
  {
    id: '2',
    name: 'Hooks 案例',
    icon: 'StarFilled',
    url: '1',
    childList: [
      {
        id: '2.1',
        name: 'HoverHooks',
        url: '/hooks/hoverHooks',
        childList: []
      },
      {
        id: '2.2',
        name: 'InViewportHooks',
        url: '/hooks/inViewportHooks',
        childList: []
      }
    ]
  }
]
