import axios from "axios"

const service = axios.create({
    baseURL:"https://cloud-dev.yiyao365.cn",
    timeout:5000
})

// request interceptor
service.interceptors.request.use(
    config => {
        config.headers['X-Token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbkNvZGUiOiIxODM2Mzk3NTE5MCIsInN0b3JlSWQiOiIxMjgxOCIsInVzZXJJZCI6IjdkMjNjNjlkLTdkZTctNGJhNS05NWMwLTcyMGE2YWE1NjRmYSIsInV1aWQiOiIzZjIxNDY0My1lMTdkLTRhZGMtYThlZi1jYTk3MGY3NjllM2YiLCJjb3Jwb3JhdGVJZCI6Ijg4ODg4OCJ9.8jFLQm56x-wMcnm4nQyZyJXewORz3Ma1Ehkji-6a9c8"
        config.headers['entId'] = '888888' // 权限的接口，网关在请求头中需要加上entId
        config.headers['token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbkNvZGUiOiIxODM2Mzk3NTE5MCIsInN0b3JlSWQiOiIxMjgxOCIsInVzZXJJZCI6IjdkMjNjNjlkLTdkZTctNGJhNS05NWMwLTcyMGE2YWE1NjRmYSIsInV1aWQiOiIzZjIxNDY0My1lMTdkLTRhZGMtYThlZi1jYTk3MGY3NjllM2YiLCJjb3Jwb3JhdGVJZCI6Ijg4ODg4OCJ9.8jFLQm56x-wMcnm4nQyZyJXewORz3Ma1Ehkji-6a9c8"
        config.headers['version'] = '1.0.0'
      return config
    },
    error => {
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )
  // response interceptor
service.interceptors.response.use(

    response => {
      const res = response.data
      return res
    },
    error => {
      console.log('err' + error) // for debug
    }
  )

  export {service}