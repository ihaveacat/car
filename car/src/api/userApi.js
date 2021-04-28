//用户请求接口
import request from '@/utils/request'

export default {
    //根据id获取用户
    findUserById(params) {
        return request({
            url: 'users/findUserById',
            method: 'post',
            data: params
        })
    },
}