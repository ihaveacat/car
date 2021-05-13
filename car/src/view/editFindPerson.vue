<!-- 发布找人信息 -->
<template>
    <div>
        <van-nav-bar placeholder fixed title="发布找人信息" safe-area-inset-top left-text="返回" left-arrow @click-left="back()"/>
    </div>
</template>

<script>
//引入资源
import Vue from 'vue';
import Vant from 'vant';
import { Dialog } from 'vant';
import carApi from '@/api/carApi'
Vue.use(Vant);
import 'vant/lib/index.css';
// import * as util from '@/assets/util.js';

export default {
    //数据
    data() {
        return {
            
        }
    },
    //方法
    methods: {
        //返回
        back() {
            this.$router.push({path: '/'});
        },
        confirmCar() {
            
        },
    },
    //创建时函数
    created() {
        var userId = this.$route.query.userId;
        carApi.findCarByUserId({userId: userId}).then(res => {
            if (res.data.data.length < 1) {
                Dialog.confirm({
                    message: "你还没有登记车哎！还不整一辆去？"
                }).then(() => {
                    this.$router.push({path: '/carMaintain'});
                }).catch(() => {
                    this.$router.push({path: '/'});
                });
            }
        });
    },
    //渲染完函数
    mounted() {
        
    }
}
</script>
<!-- 样式 -->
<style>

</style>