const getters = {
  // 建立快捷访问
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token
}
export default getters
