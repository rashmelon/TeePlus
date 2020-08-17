import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`transaction${filters}`)
    },

    view(id) {
        return axios.get(`transaction/${id}`)
    },

    create(data) {
        return axios.post(`transaction`, data)
    },

    update(id, data) {
        return axios.post(`transaction/${id}`, data)
    },

    delete(id) {
        return axios.delete(`transaction/${id}`)
    }
}
