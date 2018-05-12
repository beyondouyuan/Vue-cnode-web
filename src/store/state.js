/*
* @Author: beyondouyuan
* @Date:   2018-05-01 15:43:59
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-01 15:58:59
*/

const state = {
  accessToken: window.localStorage.accessToken || '',
  isLogin: false,
  userInfo: {
    avatar_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACAQMAAACnuvRZAAAAA1BMVEX29vYACyOqAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==',
    id: '',
    loginname: ''
  },
  messageCount: 0
}
