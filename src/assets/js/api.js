import axios from 'axios'

export const testApi = (params) => {
  return axios.get(`https://api.douban.com/v2/book/1220562`).then((res) => {
    return res.data
  })
}
