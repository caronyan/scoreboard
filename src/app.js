import Vue from 'vue'
import App from './App.vue' // main view
import router from './router' // router
import store from './store' // store
import { sync } from 'vuex-router-sync'
import { SET_MENUS } from '@/store/mutation-types'
import menus from '@/store/static/menu' // default menus
// 3rd plugins
import NProgress from 'vue-nprogress'
import 'font-awesome/scss/font-awesome.scss'

Vue.router = router
Vue.use(NProgress)

Vue.config.productionTip = false

sync(store, router)
// const { state } = store

// init menus
store.commit(SET_MENUS, menus)
router.addRoutes(menus)

const app = new Vue({
    router,
    store,
    ...App
  })
  
export { app, router, store }


