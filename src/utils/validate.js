/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
// 校验手机号
export function validMobile(value) {
  // 1开头 第二位是3-9 后面还有9个数字  规则.test(str)判断str是否符合前面的规则
  return /^1[3-9]\d{9}$/.test(value)
}
