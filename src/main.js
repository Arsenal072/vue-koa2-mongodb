import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './request'
import apis from '../api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//公用样式
import "./assets/css/global.scss"
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$apis = apis
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
