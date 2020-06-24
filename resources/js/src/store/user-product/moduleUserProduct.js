
import state from './moduleUserProductState'
import mutations from './moduleUserProductMutations'
import actions from './moduleUserProductActions'
import getters from './moduleUserProductGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

