import { ElLoading } from 'element-plus'
import adminMenu from '@/mock/adminMenu'
import demoMenu from '@/mock/demoMenu'

export function login(username: string, password: string) {
  return new Promise((resolve) => {
    const loadingInstance = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    setTimeout(() => {
      loadingInstance.close()
      if (username === 'admin') {
        resolve(adminMenu)
      } else {
        resolve(demoMenu)
      }
    }, 1000)
  })
}
