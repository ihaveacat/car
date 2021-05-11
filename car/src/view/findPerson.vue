<template>
    <div style="white-space: pre;">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="100"><!--  :immediate-check="false" -->
                <van-cell center v-for="item in list" :key="item.id" :title="item.title"
                    :label="item.info" :value="item.seat" :value-class="item.style" @click.native="join(item.allSeat, item.occupySeat)"/>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import { Notify } from 'vant';
import { Dialog } from 'vant';
import API from '@/api/findPersonApi'
Vue.use(Vant);
import * as util from '@/utils/common.js';
import 'vant/lib/index.css';

export default {
    //数据
    data() {
        return {
            list: [],
            loading: false,//表示是否加载中
            finished: false,//数据全部加载完可设置为true
            refreshing: false,//页面上方加载中...提示
            page: -10,
            limit: 10,
        }
    },
    created() {
        
    },
    methods: {
        //后台加载数据，渲染列表
        onLoad() {
            let that = this;
            if (this.page < 0) {
                this.page = 0;
            } else {
                this.page += 10;
            }
            //后台加载数据
            API.pageFindPersonList({page: this.page, limit: this.limit}).then(res => {
                if (res.data.data && res.data.data.length > 0) {
                    var arr = res.data.data;
                    arr.forEach(function(item) {
                        that.list.push({
                            title: "["+item.username+"]\xa0\xa0\xa0\xa0\xa0\xa0车色："+item.carColor+"\xa0\xa0\xa0\xa0\xa0\xa0车尾号："+item.carNum,
                            info: "起点："+item.startPoint+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0发车时间："+item.startTime+
                                "\n终点："+item.endPoint+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0电话："+item.tel+
                                "\n途径："+item.theWay,
                            seat: "("+item.fullSeat+"/"+3+")",
                            style: ((item.fullSeat > 3) ? "occupySeat" : "fullSeat")
                        });
                    });
                } else {
                    this.finished = true;
                }
                this.loading = false;
                this.refreshing = false;
                if (this.list.length >= 50) {
                    this.finished = true;
                }
            })
        },
        //屏幕下拉出发函数
        onRefresh() {
            this.list = [];
            this.page = -10;
            this.finished = false;
            this.loading = true;
            this.onLoad();
        },
        //加入
        join() {
            Dialog.confirm({
                title: '确定拼车？',
                message: '请确认好日期、发车地点和发车时间！',
                }).then(() => {
                    console.log("确定加入");
                }).catch(() => {
                    console.log("取消");
                });
        }
    },
    mounted() {
        Notify({message: '点击列表加入', duration: 500});
    }
}
</script>
<!-- 样式 -->
<style>
    .fullSeat {
        color: red;
    }
    .occupySeat {
        color: rgb(2, 248, 2);
    }
    .van-notify--danger {
        background-color: #03a9f4;
    }
</style>