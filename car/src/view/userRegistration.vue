<!--  -->
<template>
    <div>
        <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="onClickLeft" />
        <van-form @submit="onSubmit">
            <van-field v-model="username" type='' name="username" label="用户名" placeholder="1~8个字符"
                :rules="[{pattern: userPattern, message: '请输入正确内容'}]" />
            <van-field v-model="password" type="password" name="password" label="密码" placeholder="6~12个字符"
                :rules="[{pattern: passwordPattern, message: '请输入正确内容'}]" />
            <van-field v-model="tel" type="" name="password" label="手机号" placeholder="手机号"
                :rules="[{pattern: telPattern, message: '请输入正确内容'}]" />
            <div class="btn">
                <van-button type="primary" text="注册" round block native-type="submit" />
            </div>
        </van-form>
    </div>
</template>

<script>
//引入资源
import Vue from 'vue';
import Vant from 'vant';
import { Toast } from 'vant';
import userApi from '@/api/userRegistrationApi';
Vue.use(Vant);
import 'vant/lib/index.css';
// import * as util from '@/assets/util.js';

export default {
    //数据
    data() {
        return {
            username: '',
            password: '',
            tel: '',
            userPattern: /^([\u4e00-\u9fa5]|[a-zA-Z0-9]){1,8}$/,
            passwordPattern: /^[a-zA-Z0-9]{6,12}$/,
            telPattern: /^1[345678]{1}\d{9}$/,
        }
    },
    //方法
    methods: {
        onClickLeft() {
            this.$router.push({path: '/login'});
        },
        onSubmit() {
            // var newUser = JSON.stringify(this.user);
            userApi.userRegistration({username: this.username, password: this.password, tel: this.tel}).then(res => {
                Toast.success('注册成功！');
                this.$router.push({path: '/login'});
            });
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