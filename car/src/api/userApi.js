//用户请求接口
import request from '@/utils/request'

export default {
    //获取session
    getToken() {
        return request({
            url: 'users/getToken',
            method: 'post'
        })
    },
}