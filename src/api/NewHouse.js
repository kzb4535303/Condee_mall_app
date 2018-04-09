import request from '@/util/request'

export const getNewhouseListApi = (params) => {
  return request({
    url: '/v2/movie/in_theaters',
    method: 'get',
    params: params
  })
}
