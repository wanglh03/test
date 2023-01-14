import request from '../utils/request';

// 最新音乐
export const getlastMc = (params) => request({
  url: '/personalized/newsong',
  method: 'get',
  params,
})

// 轮播图
export const getbanner = (params) => request({
  url: '/banner',
  method: 'get',
  params,
})

// 推荐歌单
export const personalized = (params) => request({
  url: '/personalized',
  method: 'get',
  params,
})
// 推荐mv
export const getmvlist = (params) => request({
  url: '/personalized/mv',
  method: 'get',
  params,
})
