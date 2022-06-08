import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  headers: { 'Content-Type': 'application/json; charset=utf-8' }
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use(
  (res) => {
    console.log('res', res)
    if (res.data && res.data.code === 0) {
      return res.data.data
    }else{
      ElMessage.error(res.data.msg)
      return Promise.reject(res)
    }
  },
  (err) => {
    console.log('err', err)
  }
)

export default request
