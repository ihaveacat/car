//用户请求接口
import request from '@/utils/request'

export default {
    //登录
    login(data) {
        return request({
            url: 'users/login',
            method: 'post',
            params: data
        })
    },

    //获取token
    getToken() {
        return request({
            url: 'users/getToken',
            method: 'post'
        });
    },
}