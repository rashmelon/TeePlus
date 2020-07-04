
import state from './moduleProductState'
import mutations from './moduleProductMutations'
import actions from './moduleProductActions'
import getters from './moduleProductGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

