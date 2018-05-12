/*
* @Author: beyondouyuan
* @Date:   2018-04-21 13:39:54
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-04-21 13:40:14
*/
const basePath = 'https://cnodejs.org/api/v1'
const urls = {
    topics: '/topics',
    topic: '/topic/',
    user: '/user/',
    token: '/accesstoken',
    listCollect: '/topic_collect/',
    addCollect: '/topic_collect/collect',
    delCollect: '/topic_collect/de_collect',
    userCollect: '/topic_collect',
    agreeReply: '/reply',
    messages: '/messages',
    messageCount: '/message/count',
    markAllMessage: '/message/mark_all'
}

// 获取对应的请求路径
const parseAPI = api => {
    return `${urls[api]}`
}

export default parseAPI
