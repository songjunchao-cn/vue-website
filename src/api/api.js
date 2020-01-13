import request from '../request/request'

// 获取用户信息
export function getUserApi (params) {
  const config = {
    url: '/u/getUser',
    method: 'get',
    params
  }
  return request(config)
}

// 保存用户信息
export function saveUserApi (data) {
  const config = {
    url: '/u/saveUser',
    method: 'post',
    data
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

// 获取留言信息

export function getMsgListApi (params) {
  const config = {
    url: '/m/showMsg',
    method: 'get',
    params
  }
  return request(config)
}

export function upSupApi (data) {
  const config = {
    url: '/m/upSup',
    method: 'post',
    data
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
