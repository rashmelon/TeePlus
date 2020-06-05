import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`user${filters}`)
    },

    view(id) {
        return axios.get(`user/${id}`)
    },

    create(data) {
        return axios.post(`user`, data)
    },

    update(id, data) {
        return axios.post(`user/${id}`, data)
    },

    delete(id) {
        return axios.delete(`user/${id}`)
    }
}
