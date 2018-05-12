/*
 * @Author: beyondouyuan
 * @Date:   2018-05-01 15:43:20
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-05-01 16:06:03
 */
import * as TYPES from './mutation-types'

const mutations = {
  [TYPES.LOGOUT](state) {
    window.localStorage.removeItem('accessToken')
    state.accessToken = ''
    state.isLogin = false
  },
  [TYPES.UPDATE_LOGIN_STATUS](state, data) {
    if (data.accessToken) {
      window.localStorage.accessToken = state.accessToken = data.accessToken
      state.userInfo = data.userInfo
    } else {
      state.userInfo = data
    }
    state.isLogin = true
  },
  [TYPES.UPDATE_MESSAGE_COUNT](state, count) {
    state.messageCount = count
  }
}

export default mutations
