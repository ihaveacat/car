//用户请求接口
import request from '@/utils/request'

export default {
    //根据id获取用户1
    getUserById(user) {
        return request({
            url: 'users/getUserById',
            method: 'post',
            data: user
        })
    },
}