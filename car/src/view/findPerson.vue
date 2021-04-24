<!-- 找人 -->
<template>
    <div style="white-space: pre;">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad()">
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
Vue.use(Vant);
import * as util from '@/assets/util.js';
import 'vant/lib/index.css';

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
                for (var i=1;i<5;i++) {
                    this.lists.push({id: i,
                        name: '姓名姓名姓名姓名'+i,
                        tel: "1590000000"+i,
                        color: "红色",
                        carNo: 'P8G'+i,
                        startPoint: "地点地点地点地点" + i,
                        startTime: util.dateFormatZHMS(new Date()),
                        endPoint: '地点地点地点地点'+i,
                        theWay: '地点地点地点地点地点地点地点地点地点地点地点地点'+i,
                        allSeat: '5',
                        occupySeat: i == 2 ? '5' : '3',
                        // style: "color:" + ((allSeat > occupySeat) ? "green" : "red"),
                        });
                }
                 this.lists.forEach(function(item) {
                     item.title = "["+item.name+"]\xa0\xa0\xa0\xa0\xa0\xa0车色："+item.color+"\xa0\xa0\xa0\xa0\xa0\xa0车尾号："+item.carNo;
                     item.info = "起点："+item.startPoint+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0发车时间："+item.startTime+
                        "\n终点："+item.endPoint+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0电话："+item.tel+
                        "\n途径："+item.theWay;
                     item.seat = "("+item.allSeat+"/"+item.occupySeat+")";
                     item.style = ((item.allSeat > item.occupySeat) ? "occupySeat" : "fullSeat");
                     that.list.push(item);
                 });
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
            // for (var i=1;i<5;i++) {
            //     this.list.push({id: i,
            //         name: '[姓名]'+i,
            //         startPoint: "起点" + i,
            //         startTime: util.dateFormat(new Date()),
            //         endPoint: '终点'+i,
            //         });
            // }
            this.loading = false;
            this.finished  = true;
        },
        //点击加入
        join(allSeat, occupySeat) {
            //保险起见，从后台查询数据做判断是否满员
            if (allSeat <= occupySeat) {
                Notify({message: '此车已满员，请刷新列表！', duration: 2000});
            } else {
                //加入逻辑
                console.log("join ok!");
            }
        }
    },
    //创建时函数
    created() {
        this.init();
    },
    //渲染完函数
    mounted() {
        Notify({message: '点击列表加入', duration: 1000});
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