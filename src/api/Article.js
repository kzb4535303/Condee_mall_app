import request from '@/util/request'

export const getArticleListApi = () => {
  return request({
    url: '/v2/movie/in_theaters',
    method: 'get'
  })
}
