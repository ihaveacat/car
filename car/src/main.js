// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//自定义全局组件（暂时没开发完）
import dropDown from './components/customComponents/dropDown.vue'

Vue.use(router)

Vue.config.productionTip = false
//暂时没开发完
Vue.component('dropDown', dropDown);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
