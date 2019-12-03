import request from '../request/request'

export function getUserApi (params) {
  const config = {
    url: '/u/getUser',
    method: 'get',
    params
  }
  return request(config)
}

export function postUserApi (data) {
  const config = {
    url: '/u/postUser',
    method: 'post',
    data
  }
  return request(config)
}
