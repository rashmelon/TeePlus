
import state from './moduleDesignState'
import mutations from './moduleDesignMutations'
import actions from './moduleDesignActions'
import getters from './moduleDesignGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

