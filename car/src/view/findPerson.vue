<template>
    <div style="white-space: pre;">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="300">
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
import API from '@/api/findPerson'
Vue.use(Vant);
import * as util from '@/utils/common.js';
import 'vant/lib/index.css';

export default {
    //数据
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
            page: 0,
            limit: 8
        }
    },
    created() {

    },
    methods: {
        onLoad(isFlush) {
            let that = this;
            if (this.refreshing) {
                this.list = [];
                this.refreshing = false;
            }
            if (isFlush && isFlush == 1) {
                this.page += 8;
            }
            console.log(this.page)
            //后台加载数据
            API.pageFindPersonList({page: this.page, limit: this.limit}).then(res => {
                if (res.data && res.data.length > 0) {
                    var arr = res.data;
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
                }
                this.loading = false;
            }).catch(err => {

            });
            //加载到100条后停止加载
            console.log('onLoad()已加载'+this.list.length+'条')
            if (this.list.length % 8 != 0) {
                this.finished = true;
            }
        },
        onRefresh() {
            console.log('onRefresh()')
            // 清空列表数据
            //设置分页条数
            this.page = 0;
            this.limit = 8;
            this.finished = false;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad(1);
        },
        join(x, y) {

        }
    },
}
</script>
<!-- 样式 -->
<style>
    
</style>