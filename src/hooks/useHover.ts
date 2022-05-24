import { onMounted, unref, isRef, ref, onUnmounted } from 'vue'

type Options = {
  onEnter?: () => void
  onLeave?: () => void
}
export function useHover(target: any, options?: Options) {
  let state = ref(false)
  const { onEnter, onLeave } = options ?? {}
  onMounted(() => {
    if (target) {
      let targetElement = getTargetElement(target)
      targetElement.addEventListener('mouseenter', enterFn)
      targetElement.addEventListener('mouseleave', leaveFn)
    }
  })

  onUnmounted(() => {
    if (target) {
      let targetElement = getTargetElement(target)
      targetElement && targetElement.removeEventListener('mouseenter', enterFn)
      targetElement && targetElement.removeEventListener('mouseleave', leaveFn)
    }
  })

  function enterFn() {
    state.value = true
    onEnter && onEnter()
  }
  function leaveFn() {
    state.value = false
    onLeave && onLeave()
  }

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

  return state
}
