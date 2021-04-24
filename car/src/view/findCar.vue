<!--  -->
<template>
    <div style="white-space: pre;">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad()">
                <van-cell center v-for="item in list" :key="item.id" :title="item.title" :label="item.info"/>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
//引入资源
import Vue from 'vue';
import Vant from 'vant';
Vue.use(Vant);
import 'vant/lib/index.css';
import * as util from '@/assets/util.js';

export default {
    //数据
    data() {
        return {
            list: [],
            loading: false,
            finished: '',
            refreshing: false,
            lists: [],//delete
        }
    },
    //方法
    methods: {
        //初始化数据
        init() {
            let that = this;
            //查询数据
            if (1 == 1) {
                for (var i = 1; i < 5; i ++) {
                    this.lists.push({id:i,
                        name: "姓名姓名姓名" + i,
                        tel : "1590000000" + i,
                        startPoint: "起点起点起点起点起点" + i,
                        startTime: util.dateFormatZHMS(new Date()),
                        endPoint: '终点终点终点终点终点'+i,
                    })
                }
                this.lists.forEach(function(item) {
                    item.title = "["+item.name+"]";
                    item.info = "起点："+item.startPoint+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0发车时间："+item.startTime+
                        "\n终点："+item.endPoint+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0电话："+item.tel;
                    that.list.push(item);
                })
            }
             
        },
        //下拉刷新
        onRefresh() {
            // 清空列表数据
            this.finished = false;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        },
        //加载数据
        onLoad() {
            if (this.refreshing) {
                // this.list = [];
                this.refreshing = false;
            }
            this.loading = false;
            this.finished  = true;
        }
    },
    //创建时函数
    created() {
        this.init();
    },
    //渲染完函数
    mounted() {

    }
}
</script>
<!-- 样式 -->
<style>

</style>