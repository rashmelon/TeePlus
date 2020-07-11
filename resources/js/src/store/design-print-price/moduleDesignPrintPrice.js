
import state from './moduleDesignPrintPriceState'
import mutations from './moduleDesignPrintPriceMutations'
import actions from './moduleDesignPrintActions'
import getters from './moduleDesignPrintPriceGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

