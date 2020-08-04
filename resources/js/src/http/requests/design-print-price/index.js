import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`design-print-price${filters}`)
    },

    view(id) {
        return axios.get(`design-print-price/${id}`)
    },

    create(data) {
        return axios.post(`design-print-price`, data)
    },

    update(id, data) {
        return axios.post(`design-print-price/${id}`, data)
    },

    delete(id) {
        return axios.delete(`design-print-price/${id}`)
    }
}
