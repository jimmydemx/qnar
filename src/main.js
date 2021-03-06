// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './assets/reset.css'
import './assets/reset2/reset2.css'
import './assets/border.css'
import fastclick from 'fastclick'



import {  Carousel,CarouselItem, } from 'element-ui';


Vue.use(Carousel)
Vue.use(CarouselItem)

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
