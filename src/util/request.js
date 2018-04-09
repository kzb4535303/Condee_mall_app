import axios from 'axios'
import { Toast } from 'mint-ui';

const service = axios.create({
  // baseURL: 'https://api.douban.com',
  timeout: 15000
})
service.interceptors.request.use(config => {
  config.headers['Access-Control-Allow-Origin'] = '*' // 让每个请求携带自定义token 请根据实际情况自行修改
  return config;
})
service.interceptors.response.use((res) => {
  if (res.status !== 200) {
    Toast({
      message: '数据请求失败',
      position: 'middle',
      duration: 3000
    })
  }
  return res.data
})
export default service
