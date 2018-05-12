// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'iview/dist/iview.min.js'

import Sidebar from '@/components/Sidebar'
import Loading from '@/components/Loading'
import './assets/styles/style.scss'

import * as filters from './filters'
import store from '@/store'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
Vue.use(iView)


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.component('Sidebar', Sidebar) //在main.js注册为全局组件 由此则可以在多个组件中调用
Vue.component('Loading', Loading)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
