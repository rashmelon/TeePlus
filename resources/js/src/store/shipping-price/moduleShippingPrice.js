
import state from './moduleShippingPriceState'
import mutations from './moduleShippingPriceMutations'
import actions from './moduleShippingPriceActions'
import getters from './moduleShippingPriceGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

