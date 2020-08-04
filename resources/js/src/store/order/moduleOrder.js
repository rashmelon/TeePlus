
import state from './moduleOrderState'
import mutations from './moduleOrderMutations'
import actions from './moduleOrderActions'
import getters from './moduleOrderGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

