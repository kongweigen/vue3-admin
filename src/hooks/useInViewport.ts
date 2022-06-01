/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-05-24 21:42:38
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-05-25 20:55:28
 * @FilePath: \webpack-learne:\webProject\vue3\vue3-admin\src\hooks\useInViewport.ts
 * @Description:
 *
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved.
 */
import { onMounted, unref, isRef, ref, onUnmounted } from 'vue'

type Options = {
  onEnter?: () => void
  onLeave?: () => void
}
export function useInViewport(target: any, options?: Options) {
  const { onEnter, onLeave } = options ?? {}
  const observer = new IntersectionObserver((entries) => {
    if (entries.find((item) => item.isIntersecting)) {
      console.log('出现了')
      onEnter && onEnter()
    }else{
      console.log('消失了')
      onLeave && onLeave()
    }
  })

  onMounted(() => {
    if (target && getTargetElement(target)) {
      observer.observe(getTargetElement(target))
    }
  })

  function getTargetElement(target: any): any {
    let targetEle = target
    if (isRef(targetEle)) {
      targetEle = unref(targetEle)
    }
    if (typeof target === 'function') {
      targetEle = target()
    }
    return targetEle
  }
}
