/*
* @Author: beyondouyuan
* @Date:   2018-04-21 10:45:39
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-01 16:20:25
*/

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
