import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () =>
      import ('../views/Home') // 懒加载路由
  },{
    path: '/login',
    name: 'Login',
    component: () =>
      import ('../views/Login')
  }, {
    path: '/user/:loginname',
    name: 'User',
    component: () =>
      import ('../views/User')
  }, {
    path: '/user/:loginname/collections',
    name: 'Collections',
    component: () =>
      import ('../views/Collections')
  }, {
    path: '/message',
    name: 'Message',
    component: () =>
      import ('../views/Message')
  }, {
    path: '/topic/:id',
    name: 'Topic',
    component: () =>
      import ('../views/Topic')
  }, {
    path: '/publish',
    name: 'Publish',
    component: () =>
      import ('../views/Publish')
  }, {
    path: '*',
    name: 'NotFound',
    component: () =>
      import ('../views/404')
  }]
})
















