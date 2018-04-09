// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../mui-master/dist/css/mui.css'
import '../mui-master/dist/js/mui.min.js'
import VuePreview from 'vue-preview'
Vue.config.productionTip = false
/* eslint-disable no-new */
// 必须声明
// 安装插件
Vue.use(Mint)
Vue.use(VuePreview)
Axios.defaults.baseURL = 'https://easy-mock.com/mock/5aaa4eeeb6dae8304b4e832f/ZGS/'
// 拦截器
Axios.interceptors.request.use(function (config) {
  Mint.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
})
Axios.interceptors.response.use(function (config) {
  Mint.Indicator.close()
  return config
})
Vue.prototype.$axios = Axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
