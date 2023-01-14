import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 30000,
})


// 请求拦截器
request.interceptors.request.use((config) => config, (err) => Promise.reject(err))

// 响应拦截器
request.interceptors.response.use((res) => res.data, (err) => Promise.reject(err))

export default request
