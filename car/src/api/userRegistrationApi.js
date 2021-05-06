import request from '@/utils/request'

export default {
    //注册用户
    userRegistration(params) {
        return request({
            url: 'users/userRegistration',
            method: 'post',
            data: params
        });
    }
}