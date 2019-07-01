import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import NProgress from 'vue-nprogress'

Vue.router = router
Vue.use(NProgress)

Vue.config.productionTip = false

sync(store, router)
const nprogress = new NProgress({ parent: '.nprogress-container' })
const { state } = store

const app = new Vue({
    router,
    store,
    nprogress,
    ...App
  })
  
export { app, router, store }


