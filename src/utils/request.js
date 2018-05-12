/*
* @Author: beyondouyuan
* @Date:   2018-04-21 13:43:34
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-04-21 15:32:47
*/
import axios from 'axios'
import {
    Message
} from 'iview'

/**
 * [创建axios 实例]
 * @type {[type]}
 */
console.log(process.env)
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
})

/**
 * [统一拦截请求]
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
service.interceptors.request.use(config => {
    console.log(process.env.BASE_API)
    console.log(config)
    return config
}, error => {
    console.log(error) // 打印测试
    Promise.reject(error)
})
/**
 * [统一拦截响应]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
service.interceptors.response.use(
    response => response,
    error => {
        console.log('error' + error) // 打印测试
        Message.error({
            content: error.message,
            duration: 2,
            closable: true
        })
        return Promise.reject(error)
    }
)

export default service
