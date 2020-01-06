import request from '../request/request'

// 用户信息
export function getUserApi (params) {
  const config = {
    url: '/u/getUser',
    method: 'get',
    params
  }
  return request(config)
}

// 点赞信息
export function giveLikeApi () {
  const config = {
    url: '/u/upSup',
    method: 'get'
  }
  return request(config)
}

export function getLikeApi () {
  const config = {
    url: '/u/showSup',
    method: 'get'
  }
  return request(config)
}

// 跨域外链
export function crosArticleApi () {
  const config = {
    url: 'https://api.github.com/repos/ArthurYung/my-voice/issues'
  }
  return request(config)
}
