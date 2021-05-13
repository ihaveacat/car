import request from '@/utils/request'

export default {
    //根据用户id查询车辆
    findCarByUserId(data) {
        return request({
            url: 'car/findCarByUserId',
            method: 'post',
            params: data
        });
    },
    saveCar(data) {
        return request({
            url: 'car/saveCar',
            method: 'post',
            data: data
        });
    }
}