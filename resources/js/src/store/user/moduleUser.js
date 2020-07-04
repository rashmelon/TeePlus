
import state from './moduleUserState'
import mutations from './moduleUserMutations'
import actions from './moduleUserActions'
import getters from './moduleUserGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

