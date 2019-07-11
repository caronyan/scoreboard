import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import app from './modules/app'
import menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        app,
        menu
    },
    state: {

    },
    mutations: {

    }
})
