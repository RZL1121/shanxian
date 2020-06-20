import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
 // baseURL:'http://56.212.7.252/warn_sx/' , //  线上地址
  // baseURL:'http://106.12.68.167/warn_sx/',  //测试服务器
   baseURL:'http://192.168.0.102:8081/warn_sx/',

  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['kf-token'] = getToken()  
      // config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    console.log(response.data.code)
     if (res.code != 0) {
      // Message({
      //   message: res.msg || '服务器未响应'+res.code,
      //   type: 'error',
      //   duration: 3 * 1000
      // })
      if(res.code == 601){
              Message({
              message:  '权限不足',
              type: 'error',
              duration: 3 * 1000
            })
      }
      if(res.code == 200 || res.code == 201 || res.code == 202 || res.code == 203 || res.code == 204 ||res.code == 205 ||res.code == 207 || res.code == 208 || res.code == 301){
        Message({
        message:   res.msg,
        type: 'error',
        duration: 3 * 1000
      })
}
      if(res.code == 500 || res.code == 501 || res.code == 502){
        Message({
        message:  '服务器未响应',
        type: 'error',
        duration: 3 * 1000
      })
}
      if(res.code == 101 || res.code == 102 ||res.code == 103 ){
        Message({
        message:  '参数错误',
        type: 'error',
        duration: 3 * 1000
      })
}

      if (res.code == 401 || res.code == 402 || res.code == 403 || res.code == 404 ) {
          store.dispatch('user/resetToken').then(() => {
             location.reload()
           })
        // to re-login
        // MessageBox.confirm('无token,或者token过期, 请重新登录', {
        //   confirmButtonText: '重新登陆',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   // store.dispatch('user/resetToken').then(() => {
        //   //   location.reload()
        //   // })
        // })
      }
      return Promise.reject(new Error('Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
