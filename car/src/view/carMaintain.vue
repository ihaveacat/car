<!-- 车辆维护 -->
<template>
    <div>
        <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);

import 'vant/lib/nav-bar/style'

export default {
    //数据
    data() {
        return {

        }
    },
    //方法
    methods: {
        onClickLeft() {
            this.$router.push({path: '/'});
        }
    },
    //创建时函数
    created() {

    },
    //渲染完函数
    mounted() {

    }
}
</script>
<!-- 样式 -->
<style>

</style>