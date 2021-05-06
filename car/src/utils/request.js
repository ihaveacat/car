//请求父接口
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
});

// request拦截器,请求前拦截处理
// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       // 让每个请求携带自定义token 请根据实际情况自行修改
//       config.headers['X-Token'] = getToken();
//     }
//     return config;
//   },
//   error => {
//     //错误处理
//     console.log(error);
//     Promise.reject(error);
//   }
// );

// response 拦截器，后台响应后处理
service.interceptors.response.use(
  // response => {
  //   //code为非20000是抛错 可结合自己业务进行修改
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })

  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     //code根据自己后台定义的编码，这里制作参考
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       //此处反馈给用户错误提示信息

  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
  // error => {
  //   //异常处理和错误提示信息
  //   return Promise.reject(error)
  // }
)









export default service