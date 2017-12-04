// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VRouter from 'vue-router'
import VResource from 'vue-resource'
import ElementUI from 'element-ui'
console.log('1')
import 'element-ui/lib/theme-chalk/index.css'
import App from './app'
import routes from './router'
console.log('1')
Vue.config.productionTip = false;
Vue.prototype.HOST = '/api';
Vue.use(VRouter)
Vue.use(ElementUI)
Vue.use(VResource)
console.log('2')
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render:h => h(App)
// })

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  el: '#app',
  template: '<app></app>',
  components: {
    App: App
  },
  router: router
})