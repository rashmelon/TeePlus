import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`restored-item${filters}`)
    },

    view(id) {
        return axios.get(`restored-item/${id}`)
    },

    create(data) {
        return axios.post(`restored-item`, data)
    },

    update(id, data) {
        return axios.post(`restored-item/${id}`, data)
    },

    delete(id) {
        return axios.delete(`restored-item/${id}`)
    }
}
