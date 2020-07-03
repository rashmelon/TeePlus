
import state from './moduleCityState'
import mutations from './moduleCityMutations'
import actions from './moduleCityActions'
import getters from './moduleCityGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

