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

// 获取点赞数
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
export function saveMsgApi (data) {
  const config = {
    url: '/m/saveMsg',
    method: 'post',
    data
  }
  return request(config)
}
// 获取留言点赞数
export function upSupApi (data) {
  const config = {
    url: '/m/upSup',
    method: 'post',
    data
  }
  return request(config)
}
// 博客内容
export function getBlogListApi () {
  const config = {
    url: '/b/showBlog',
    method: 'get'
  }
  return request(config)
}

export function upNumApi (data) {
  const config = {
    url: '/b/updateUpNum',
    method: 'post',
    data
  }
  return request(config)
}

export function likeNumApi (data) {
  const config = {
    url: '/b/updateLikeNum',
    method: 'post',
    data
  }
  return request(config)
}
// 评论内容
export function getCmtListApi (params) {
  const config = {
    url: '/c/showCmt',
    method: 'get',
    params
  }
  return request(config)
}

export function postCommentApi (data) {
  const config = {
    url: '/c/saveCmt',
    method: 'post',
    data
  }
  return request(config)
}
// 跨域外链
export function crosWheatherApi (ip) {
  const config = {
    url: `https://free-api.heweather.net/s6/weather/now?location=${ip}&key=4a77da0ef2be494e9e0e4b4a34ce0970`
  }
  return request(config)
}

export function crosIpApi () {
  const config = {
    url: 'https://api.ipify.org/?format=json'
  }
  return request(config)
}
