<!-- 暂时没开发完 -->
<template>
  <div>
    <van-popup v-model="show" close="close()" position="bottom" :style="{ height: '30%' }" />
  </div>
</template>

<script>
import Vue from 'vue';
import { Popup } from 'vant';
Vue.use(Popup);

export default {
    props:["show"],
    data() {
        return {
            $emit: this.show
        }
    },
    methods: {
        close() {
            this.show = false;
        }
    },
    created() {
        console.log(this.show)
    }
}
</script>

<style>

</style>