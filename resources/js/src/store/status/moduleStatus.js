
import state from './moduleStatusState'
import mutations from './moduleStatusMutations'
import actions from './moduleStatusActions'
import getters from './moduleStatusGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

