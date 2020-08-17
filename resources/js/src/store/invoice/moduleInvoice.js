
import state from './moduleInvoiceState'
import mutations from './moduleInvoiceMutations'
import actions from './moduleInvoiceActions'
import getters from './moduleInvoiceGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

