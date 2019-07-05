import { TOGGLE_SIDEBAR } from '../mutation-types'

export const toggleSidebar = ({ commit }, display) => {
    window.console.log('toggleSidebar')
    window.console.log(!!display);
    commit(TOGGLE_SIDEBAR, !!display)
}