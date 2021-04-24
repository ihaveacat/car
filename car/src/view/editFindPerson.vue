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
            this.$router.push({path: '/', param: {index: 0}});
        }
    },
    //创建时函数
    created() {
        //判断人员id
        if (this.$route.query.userId) {
            //查询是否有车
            
        } else {

        }
    },
    //渲染完函数
    mounted() {

    }
}
</script>
<!-- 样式 -->
<style>

</style>