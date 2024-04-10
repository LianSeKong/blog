import axios from "axios";
import { showMessage as Notify} from '@/utils'
const server = axios.create({
    baseURL: '/api',
    timeout: 5000
})


server.interceptors.response.use(
      response => {
        const status = response.data.code
        const defaultNotify = {
          content: 'imageLoader',
          type: 'error',
          duration: 3000,
      }
      switch (status) {
          case 403:
            defaultNotify.content = '拒绝访问(403)'
            Notify(defaultNotify)
            break
          case 404:
            defaultNotify.content = '资源不存在(404)'
            Notify(defaultNotify)
            break
          case 408:
            defaultNotify.content = '请求超时(408)'
            Notify(defaultNotify)
            break
          case 500:
            defaultNotify.content = '服务器错误(500)'
            Notify(defaultNotify)
            break
          case 501:
            defaultNotify.content = '服务未实现(501)'
            Notify(defaultNotify)
            break
          case 502:
            defaultNotify.content = '网络错误(502)'
            Notify(defaultNotify)
            break
          case 503:
            defaultNotify.content = '服务不可用(503)'
            Notify(defaultNotify)
            break
          case 504:
            defaultNotify.content = '网络超时(504)'
            Notify(defaultNotify)
            break
          case 505:
            defaultNotify.content = 'HTTP版本不受支持(505)'
            Notify(defaultNotify)
            break
          default:
            Notify(defaultNotify)
            break
        }
      return response
    },
    error => {
      return Promise.reject(error)
    }
  )
  

export default server

