/*
* @Author: beyondouyuan
* @Date:   2018-05-01 15:43:02
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-01 16:02:30
*/
import * as TYPES from './mutation-types'

const fetchMessageCount = ({commit}) => {
  commit(TYPES.UPDATE_MESSAGE_COUNT)
}

export const LoginAction = ({dispatch, state, commit}, data) => {
  commit(TYPES.UPDATE_LOGIN_STATUS, data)
  dispatch('fetchMessageCount')
}


export const CheckLoginActin = ({dispatch, state, commit}) => {
  if (state.accessToken) {

  }
}

