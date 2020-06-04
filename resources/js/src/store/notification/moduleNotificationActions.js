
import employee from "../../http/requests/notification/index"

export default {
    getData({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            employee.getAll()
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    markAsRead({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            employee.markAsRead()
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
}
