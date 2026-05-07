import { useEffect } from 'react'

/**
 * 在 window 滚动期间给 <body> 添加 data-scrolling="true"，
 * 停止滚动 ~120ms 后移除。配合 CSS 可在滚动期间禁用
 * 昂贵的 hover 过渡。
 */
export function useScrollingFlag() {
  useEffect(() => {
    let timer = null
    let ticking = false

    const setFlag = () => {
      document.body.setAttribute('data-scrolling', 'true')
    }

    const clearFlag = () => {
      document.body.removeAttribute('data-scrolling')
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setFlag()
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            clearFlag()
            ticking = false
          }, 120)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timer) clearTimeout(timer)
      clearFlag()
    }
  }, [])
}
