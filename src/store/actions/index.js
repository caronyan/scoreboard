import { TOGGLE_SIDEBAR } from '../mutation-types'

export const toggleSidebar = ({ commit }, display) => {
    commit(TOGGLE_SIDEBAR, !!display)
}