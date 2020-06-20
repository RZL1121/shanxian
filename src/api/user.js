import request from '@/utils/request'
import md5 from 'blueimp-md5'
import Qs from 'qs'
export function login(username,password) {
  return request({
    url: '/user/user/login',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      user_name:username,
      pass_word: md5(password)
     }
  })
}
export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    data: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
