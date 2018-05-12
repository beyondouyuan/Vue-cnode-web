/*
 * @Author: beyondouyuan
 * @Date:   2018-04-21 10:45:39
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-05-01 16:44:28
 */

import parseAPI from './urls'
import request from '../utils/request'

export const requestTopics = config => {
  // 默认配置
  const url = parseAPI('topics')
  const setting = {
    page: 1,
    tab: 'all',
    limit: 20,
    mdrender: false
  }
  // 合并自定义参数
  Object.assign(setting, config)
  return request({
      url: `${url}`,
      method: 'get',
      params: {
        ...setting
      }
    })
    .then(res => res.data)
}

export const requestTopic = config => {
  // 默认配置
  const url = `${parseAPI('topic')}${config.id}`
  const setting = {
    mdrender: true
  }
  // 合并自定义参数
  Object.assign(setting, config)
  return request({
      url: `${url}`,
      method: 'get',
      params: {
        ...setting
      }
    })
    .then(res => res.data)
}
