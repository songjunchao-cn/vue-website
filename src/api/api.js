import request from '../request/request'

export function getUserApi (params) {
  const config = {
    url: '/u/getUser',
    method: 'get',
    params
  }
  return request(config)
}

export function crosArticleApi () {
  const config = {
    url: 'https://api.github.com/repos/ArthurYung/my-voice/issues',
    exclude: true
  }
  return request(config)
}
