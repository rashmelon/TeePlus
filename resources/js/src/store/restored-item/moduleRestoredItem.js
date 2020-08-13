
import state from './moduleRestoredItemState'
import mutations from './moduleRestoredItemMutations'
import actions from './moduleRestoredItemActions'
import getters from './moduleRestoredItemGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

