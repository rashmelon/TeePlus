
import state from './moduleNotification'
import mutations from './moduleNotificationMutations'
import actions from './moduleNotificationActions'
import getters from './moduleNotificationGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

