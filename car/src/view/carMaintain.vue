<!-- 车辆维护 -->
<template>
    <div>
        <van-nav-bar title="车辆信息" left-text="返回" left-arrow @click-left="onClickLeft()" right-text="保存" @click-right="onClickRight" />
        <van-form @submit="onSubmit">
            <van-field v-model="carInfo.carName" label="车辆品牌" placeholder="大众/福特..." />
            <van-field v-model="carInfo.carColor" is-link label="车辆颜色" @click="showColor = true" readonly />
            <van-field v-model="carInfo.carNum" label="车辆尾号" required placeholder="可输入后四位" />
            <van-field v-model="carInfo.fullSeat" label="车辆总座位（含司机）">
                <template #input>
                    <van-stepper v-model="value" min="2" max="51" integer async-change @change="onChange" />
                </template>
            </van-field>
        </van-form>
        <van-popup v-model="showColor" round position="bottom" :style="{ height: '35%' }">
            <van-picker :columns="colorList" show-toolbar @confirm="onConfirm" @cancel="onCancel" />
        </van-popup>
    </div>
</template>

<script>
//引入资源
import Vue from 'vue'
import Vant from 'vant'
Vue.use(Vant)
import { Toast } from 'vant'
import auth from '@/utils/auth.js';
Vue.use(Toast)
import carApi from '@/api/carApi'
import 'vant/lib/index.css'

export default {
    //数据
    data() {
        return {
            carInfo: {},
            showColor: false,
            colorList: [],
            value: 5,
            // namePattern: /^[\u4e00-\u9fa5]{2,8}$/,// :rules="[{pattern: namePattern, message: '请输入正确内容'}]"
        }
    },
    //方法
    methods: {
        //返回
        onClickLeft() {
            this.$router.push({path: '/'});
        },
        //保存
        onClickRight() {
            //判断内容
            if (this.carInfo.carName) {
                if (this.carInfo.carName.length > 8) {
                    Toast.fail('车辆品牌超长');
                    return;
                }
            }
            if (!this.carInfo.carNum) {
                Toast.fail('请填写车牌号');
                return;
            }
            if (this.carInfo.carNum.length > 8) {
                Toast.fail('车牌号超长');
                return;
            }
            this.carInfo.userId = auth.getId();
            //保存车辆
            carApi.saveCar(this.carInfo).then(res => {
                this.$router.push({path: '/editFindPerson', query: {userId: auth.getId()}});
            });
        },
        //确定
        onConfirm(value) {
            this.carInfo.carColor = value;
            this.showColor = false;
        },
        //取消
        onCancel() {
            this.showColor = false;
        },
        //选择座位数
        onChange(value) {
            this.carInfo.fullSeat = value;
        },
        //提交表单
        onSubmit() {
            console.log('submit')
        }
    },
    //创建时函数
    created() {
        this.colorList = ["黑色", "白色", "红色", "蓝色", "黄色", "灰色", "绿色","其他颜色"];
        this.carInfo.fullSeat = this.value;
    },
    //渲染完函数
    mounted() {

    }
}
</script>
<!-- 样式 -->
<style>

</style>