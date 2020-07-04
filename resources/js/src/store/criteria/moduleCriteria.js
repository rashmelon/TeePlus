
import state from './moduleCriteriaState'
import mutations from './moduleCriteriaMutations'
import actions from './moduleCriteriaActions'
import getters from './moduleCriteriaGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

