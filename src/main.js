// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import 'normalize.css'
import './assets/reset.scss'


Vue.config.productionTip = false

Vue.component('Hello', Hello)    //将局部组件变为全局组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    "App": App
  }
})
