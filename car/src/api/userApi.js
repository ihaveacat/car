//用户请求接口
import request from '@/utils/request'

export default {
    //保存用户
    save(user) {
        return request({
            url: 'users/save',
            method: 'post',
            data: user
        })
    },
}