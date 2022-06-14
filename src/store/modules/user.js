import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
// 状态
const state = {
  // 设置token为共享状态
  token: getToken() // vuex初始化时先从缓存中读取
}
// 修改状态
const mutations = {
  // 设置token
  setToken(state, token) {
    state.token = token // 设置token  只是修改state的数据  123 =》 1234
    // vuex变化 => 缓存数据
    setToken(token) // vuex和 缓存数据的同步
  },
  // 删除缓存
  removeToken(state) {
    state.token = null // 删除vuex的token
    removeToken() // 先清除 vuex  再清除缓存 vuex和 缓存数据的同步
  }
}
// 执行异步
const actions = {
  async login(context, data) {
    // 调用接口
    const result = await login(data) // 拿到token
    context.commit('setToken', result) // 处理token
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

