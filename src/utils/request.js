import axios from 'axios';
// 创建axios实例
// axios.defaults.withCredentials = true;
const service = axios.create({
  // baseURL: 'https://master-dev.guzzu.cn/suapi/2',
  baseURL: 'https://mp-dev.guzzu.cn/mpapi/2',
  timeout: 15000, // 请求超时时间
  withCredentials: true

});

// request拦截器
// service.interceptors.request.use(config => {
//   if (store.getters.token) {
//   }
//   return config;
// }, error => {
//   console.log(error); // for debug
//   Promise.reject(error);
// });

// // respone拦截器
service.interceptors.response.use(
  response => {

    const res = response.data;

    return res;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
