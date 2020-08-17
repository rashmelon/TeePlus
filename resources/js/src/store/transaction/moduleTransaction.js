
import state from './moduleTransactionState'
import mutations from './moduleTransactionMutations'
import actions from './moduleTransactionActions'
import getters from './moduleTransactionGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

