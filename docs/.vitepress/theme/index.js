import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

export default {
  extends: DefaultTheme,
  
  setup() {
    onMounted(() => {
      if (typeof window !== 'undefined') {
        // 处理从 404.html 重定向回来的路径
        const urlParams = new URLSearchParams(window.location.search)
        const originalPath = urlParams.get('p')
        
        if (originalPath) {
          // 恢复原始路径并清除查询参数
          const decodedPath = decodeURIComponent(originalPath)
          window.history.replaceState(null, '', decodedPath)
        }
      }
    })
  }
}