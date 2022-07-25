// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require('swiper/dist/css/swiper.css')

import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import router from './router'
// import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
// import 'swiper/css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
//新版vue-cli的vue实例
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
