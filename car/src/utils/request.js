//请求父接口
import axios from 'axios'
import { Toast } from 'vant';
import cookie from 'js-cookie';
import router from '@/router/index'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // 定义后端api前缀
  // headers:{'X-Requested-with':'XMLHttpRequest'},
  // headers: {'Content-Type': "application/json;charset=utf-8"},
  timeout: 1000000 // 请求超时时间(10秒)
});

// request拦截器,请求前拦截处理
service.interceptors.request.use(
  config => {
    if (cookie.get("token")) {
      
      // config.headers.accessToken = cookie.get("token");
      // config.headers['token'] = cookie.get("token");
      // config.headers.Authorization = cookie.get("token");
      // config.headers['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
      // request.headers.set('token', cookie.get("token"));
    }
    return config;
  },
  error => {
    //错误处理
    console.log("request拦截器报错");
    Promise.reject(error);
  }
);

// response 拦截器，后台响应后处理
service.interceptors.response.use(
  //后台响应处理
  response => {
    const res = response.data;
    if (res.code !== 20000) {
      Toast.fail(res.message);
      //token无效处理
      if (res.code == 23004) {
        router.push({path: '/login'})
      }
      return Promise.reject('error');
    } else {
      return response.data;
    }
  },
  //http错误处理
  error => {
    Toast.fail("http响应故障！");
    return Promise.reject(error);
  }
)

export default service