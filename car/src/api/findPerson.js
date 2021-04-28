import request from '@/utils/request'

export default {
    //获取列表
    pageFindPersonList(params) {
        return request({
            url: 'findPerson/pageFindPersonList',
            method: 'post',
            params: params
        });
    }
}