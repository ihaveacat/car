//请求父接口
import axios from 'axios'
import { Toast } from 'vant';
import cookie from 'js-cookie';
// import router from '@/router/index'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // 定义后端api前缀
  timeout: 10000 // 请求超时时间(10秒)
});

// request拦截器,请求前拦截处理
service.interceptors.request.use(
  config => {
    if (cookie.get("token")) {
      config.headers['X-Token'] = cookie.get("token");
      // request.headers.set('x-token', tokens);
    }
    config.headers['X-Token'] = "*";
    return config;
    // this.$router.push({path: '/'});
    // router.replace({path:"/"});
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