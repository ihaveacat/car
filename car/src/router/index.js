import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const originalPush = Router.prototype.push;
// const originalReplace = Router.prototype.replace;

// // push
// Router.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }
// // replace
// Router.prototype.replace = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
//   return originalReplace.call(this, location).catch(err => err)
// }

export default new Router({
  routes: [
    //主页
    {
      path: '/',
      name: 'index',
      component: () => import('@/view/index'),
      redirect: '/findPerson',//设置默认页
      children: [
        //找人
        {
          path: '/findPerson',
          name: 'findPerson',
          component: () => import('@/view/findPerson')
        },
        //找车
        {
          path: '/findCar',
          name: 'findCar',
          component: () => import('@/view/findCar')
        }]
    },
    //登录页
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login')
    },
    //注册页
    {
      path: '/userRegistration',
      name: 'userRegistration',
      component: () => import('@/view/userRegistration')
    },
    //发布求人信息
    {
      path: '/editFindPerson',
      name: 'editFindPerson',
      component: () => import('@/view/editFindPerson')
    },
    //发布求车信息
    {
      path: '/editFindCar',
      name: 'editFindCar',
      component: () => import('@/view/editFindCar')
    },
    //车辆维护
    {
      path: '/carMaintain',
      name: 'carMaintain',
      component: () => import('@/view/carMaintain')
    }
  ]
})
