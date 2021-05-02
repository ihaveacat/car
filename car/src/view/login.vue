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
      <van-field v-model="user.username" type='' name="username" label="用户名" placeholder="1~8个字符"
        :rules="[{pattern: userPattern, message: '请输入正确内容'}]" />
      <van-field v-model="user.password" type="password" name="password" label="密码" placeholder="6~12个字符"
        :rules="[{pattern: passwordPattern, message: '请输入正确内容'}]" />
      <div class="btn">
        <van-button type="primary" text="登录" round block native-type="submit" />
        <van-button type="primary" text="注册" round block native-type="submit" @click.native="regist"/>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import { Toast } from 'vant';
Vue.use(Vant);
import 'vant/lib/index.css';

export default {
  //数据
  data() {
    return {
      user: {username: '', password: ''},
      userPattern: /^([\u4e00-\u9fa5]|[a-zA-Z0-9]){1,8}$/,
      passwordPattern: /^[a-zA-Z0-9]{6,12}$/,
    }
  },
  //方法
  methods: {
    //输入正确后处理
    onSubmit(value) {
      // console.log(value.username);
      this.$router.push({path: '/'});
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
    margin: 16px;
  }
</style>
