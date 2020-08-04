
import state from './moduleCombinationState'
import mutations from './moduleCombinationMutations'
import actions from './moduleCombinationActions'
import getters from './moduleCombinationGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

