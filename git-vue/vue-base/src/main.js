import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./assets/font/iconfont.css";
import "./assets/css/globel.css";
import "./views/index.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import echarts from "echarts"


Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

// 配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:6001/client/";
// axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.baseURL = 'http://127.0.0.1:6001/client/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  console.log("123");
  return config;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
