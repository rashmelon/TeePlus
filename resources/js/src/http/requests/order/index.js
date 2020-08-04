import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`order${filters}`)
    },

    view(id) {
        return axios.get(`order/${id}`)
    },

    create(data) {
        return axios.post(`order`, data)
    },

    update(id, data) {
        return axios.post(`order/${id}`, data)
    },

    delete(id) {
        return axios.delete(`order/${id}`)
    }
}
