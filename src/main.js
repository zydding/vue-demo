import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import './assets/css/common.scss'

Vue.config.productionTip = false


//Axios配置
import Axios from 'axios'

Axios.defaults.withCredentials = true;

//拦截get请求，加上时间参数，防止IE缓存
Axios.interceptors.request.use(
  (config) => {
    if(config.method=="post" || config.method=="get"){
      config.url = config.url.indexOf("?")>-1 ? config.url + "&_=" + (new Date().getTime()) : config.url + "?_=" + (new Date().getTime());
    }
    return config;
})
Vue.prototype.$axios = Axios

Vue.use(Axios);

import qs from 'qs'
Vue.prototype.$qs = qs

import store from './store';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
