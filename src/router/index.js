import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Ceat from '../components/ceat/ceat.vue'
Vue.use(Router)
export default new Router({
  linkActiveClass: 'mui-active',
  // 路由
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'ceat',
      path: '/ceat',
      component: Ceat
    }
  ]
})
