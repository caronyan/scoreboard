import { TOGGLE_SIDEBAR } from '../mutation-types'

const state = {
    sidebar: {
        opened: true
    }
}

const mutations = {
    [TOGGLE_SIDEBAR] (state, display) {
        state.sidebar.opened = display;
    }
}

export default {
    state,
    mutations
}