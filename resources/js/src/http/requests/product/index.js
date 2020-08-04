import axios from "../../axios"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`product${filters}`)
    },

    view(id) {
        return axios.get(`product/${id}`)
    },

    create(data) {
        return axios.post(`product`, data)
    },

    update(id, data) {
        return axios.post(`product/${id}`, data)
    },

    delete(id) {
        return axios.delete(`product/${id}`)
    }
}
