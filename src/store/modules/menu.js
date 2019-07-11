import { SET_MENUS } from '../mutation-types'

const state = {
    menuItems: []
}

const mutations = {
    [SET_MENUS] (state, menus) {
        state.menuItems = [...menus]
    }
}

export default {
    state,
    mutations
}