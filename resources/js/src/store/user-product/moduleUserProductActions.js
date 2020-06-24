
import userProduct from "../../http/requests/user-product/index"

export default {
    getData({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            userProduct.getAll(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    view({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            userProduct.view(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    create({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            userProduct.create(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    update({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            userProduct.update(payload.id, payload.data)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    delete({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            userProduct.delete(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
}
