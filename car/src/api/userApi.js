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
    //根据id删除用户
    removeById(id) {
        return request({
            url: 'users/removeById/' + id,
            method: 'delete',
        })
    },
    //修改用户
    updateUser(user) {
        return request({
            url: 'users/updateUser',
            method: 'put',
            data: user
        })
    },
    //根据id查询用户
    findUserById(id) {
        return request({
            url: "users/findUserById/" + id,
            method: 'get'
        })
    },
    //查询用户列表
    findUserList(page, limit, params) {
        return request({
            url: 'users/findUserList/${page}/${limit}',
            method: 'get',
            params: params
        })
    },
}