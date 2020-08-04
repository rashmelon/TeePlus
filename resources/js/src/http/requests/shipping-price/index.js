import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`shipping-price${filters}`)
    },

    view(id) {
        return axios.get(`shipping-price/${id}`)
    },

    create(data) {
        return axios.post(`shipping-price`, data)
    },

    update(id, data) {
        return axios.post(`shipping-price/${id}`, data)
    },

    delete(id) {
        return axios.delete(`shipping-price/${id}`)
    }
}
