<!-- 登录页 -->
<template>
  <div>
    <van-row justify="center">
      <van-col span="8"></van-col>
      <van-col span="8">
        <van-image width="100%" height="100%" round src="/static/images/car.png" @click.native="carClick"/>
      </van-col>
    <van-col span="8"></van-col>
    </van-row>
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="用户名" placeholder="1~8个字符"
        :rules="[{pattern: userPattern, message: '请输入正确内容'}]" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="6~12个字符"
        :rules="[{pattern: passwordPattern, message: '请输入正确内容'}]" />
      <van-button class="btn" type="primary" text="登录" round block native-type="submit" />
    </van-form>
    <van-button class="btn" type="primary" text="注册" round block @click.native="regist"/>
  </div>
</template>

<script>
import userApi from '@/api/userApi'
import Vue from 'vue';
import Vant from 'vant';
import { Toast } from 'vant';
import auth from '@/utils/auth.js';
Vue.use(Vant);
import 'vant/lib/index.css';

export default {
  //数据
  data() {
    return {
      username: '',
      password: '',
      userPattern: /^([\u4e00-\u9fa5]|[a-zA-Z0-9]){1,8}$/,
      passwordPattern: /^[a-zA-Z0-9]{6,12}$/,
    }
  },
  //方法
  methods: {
    //输入正确后处理
    onSubmit() {
      userApi.login({username: this.username, password: this.password}).then(res => {
        auth.setToken(res.data.token);
        auth.setId(res.data.id);
        this.$router.push({path: '/'});
      });
    },
    //跳转注册页
    regist() {
      this.$router.push({path: '/userRegistration'});
    },
    carClick() {
      Toast({
        message: '点我干啥！',
        position: 'top',
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

<style>
  .btn {
    margin-top: 16px;
  }
</style>
