import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`status${filters}`)
    },

    view(id) {
        return axios.get(`status/${id}`)
    },

    create(data) {
        return axios.post(`status`, data)
    },

    update(id, data) {
        return axios.post(`status/${id}`, data)
    },

    delete(id) {
        return axios.delete(`status/${id}`)
    }
}
