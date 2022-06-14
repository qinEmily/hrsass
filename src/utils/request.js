import axios from 'axios'
import { Message } from 'element-ui'
// 创建aixos实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // /dev-api(npm run dev)   /prod-api(npm run build)
  timeout: 5000 // 请求超时
})
// interceptors是拦截器的意思
// 请求拦截器
service.interceptors.request.use()
// 响应拦截器
service.interceptors.response.use(
  response => {
    // axios默认加了一层data
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      return data
    } else {
    // 业务已经错误了 还能进then ? 不能 ！ 应该进catch
      Message.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  error => {
    Message.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)
export default service
