<!-- 主页 -->
<template>
  <div>
    <van-nav-bar placeholder fixed :title="title" right-text="发布信息" safe-area-inset-top @click-right="release()"/>
    <router-view />
    <van-tabbar fixed route v-model="index" placeholder safe-area-inset-bottom @change="onChange()">
      <van-tabbar-item to="/findPerson" icon="home-o" dot>找人</van-tabbar-item>
      <van-tabbar-item to="/findCar" icon="search"  badge="1">找车</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
//引入资源
import Vue from 'vue';
import Vant from 'vant';
import userApi from '@/api/userApi'
Vue.use(Vant);
import 'vant/lib/index.css';

export default {
  data() {
    return {
      index: 0,//tab下标
      title: '找人',
    }
  },
  methods: {
    //切换tab
    onChange() {
      if (this.index == 0) {
        this.title = '找人';
      } else {
        this.title = '找车';
      }
    },
    //发布信息
    release() {
      if (this.index == 0) {
        this.$router.push({path: '/editFindPerson', query: {userId: 'ididididi'}});
      } else {
        console.log('发布找车信息');
      }
    }
  },
  created() {
    //判断token，没有token跳转到登录页
    // userApi.getToken().then(res => {
    //   if (res.data) {
    //     this.$router.push({path: '/login'});
    //   }
    // }).catch(err => {
    //   //请求后台错误处理
    //   console.log("500")
    // });
  },
  mounted() {

  }
}
</script>
<!-- 样式 -->
<style>

</style>
