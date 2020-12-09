// import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    baseURL: process.env.VUE_APP_API,
    timeout: 60 * 1000, // Timeout
    // 'Content-Type': 'application/x-www-form-urlencoded';
    // withCredentials: true // Check cross-site Access-Control 10
}

let _axios = axios.create(config)

_axios.interceptors.request.use(config => {
    config.headers.common['Authorization']= 'Bearer ' + store.state.user.token||''
    // Do something before request is sent
    console.log('请求参数-----', config)
    return config
}, error => {
    return Promise.reject(error)
})

// Add a response interceptor
_axios.interceptors.response.use(response => {
    return new Promise((resolve, reject) => {
        if (response.data.returnCode == 200) {
            resolve(response.data)
        } else {
            errorFn(response.data.returnCode, response.data.returnMsg)
            reject(response.data)
        }
    })
}, error => {
    errorFn(error.response && error.response.status, error.response && error.response.message)
    return Promise.reject(error)
})

// 统一错误处理
export const errorFn = (code, msg) => {
    switch (code) {
        // case 400:
        //     Message(msg || '请求错误(400)', 'warning')
        //     break
        // case 401:
        //     Message(msg || 'Token错误(401)', 'warning')
        //     break
        // case 403:
        //     Message(msg || '拒绝访问(403)', 'warning')
        //     break
        // case 404:
        //     Message(msg || '请求出错(404)', 'warning')
        //     break
        // case 405:
        //     Message(msg || '拒绝访问(405)', 'warning')
        //     break
        // case 408:
        //     Message(msg || '请求超时(408)', 'warning')
        //     break
        // case 500:
        //     Message(msg || '系统网络有点小延迟，请稍等~', 'warning')
        //     break
        // case 501:
        //     Message(msg || '服务未实现(501)', 'warning')
        //     break
        // case 502:
        //     Message(msg || '网络错误(502)', 'warning')
        //     break
        // case 503:
        //     Message(msg || '服务不可用(503)', 'warning')
        //     break
        // case 504:
        //     Message(msg || '服务异常(504)', 'warning')
        //     break
        // case 550:
        //     Message(msg || '未登录或者登录失效，请先登录')
        //     break
        // case 505:
        //     Message(msg || 'HTTP版本不受支持(505)', 'warning')
        //     break
        default:
            Message({
                message: msg || '连接出错', 
                type: 'warning'
            })
            break
    }
}

export default _axios



// Plugin.install = function (Vue, options) {
//     Vue.axios = _axios
//     window.axios = _axios
//     Object.defineProperties(Vue.prototype, {
//         axios: {
//             get() {
//                 return _axios
//             }
//         },
//         $axios: {
//             get() {
//                 return _axios
//             }
//         }
//     })
// }

// Vue.use(Plugin)

// export default Plugin