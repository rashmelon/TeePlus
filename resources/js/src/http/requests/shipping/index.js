import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`shipping-method${filters}`)
    },

    view(id) {
        return axios.get(`shipping-method/${id}`)
    },

    create(data) {
        return axios.post(`shipping-method`, data)
    },

    update(id, data) {
        return axios.post(`shipping-method/${id}`, data)
    },

    delete(id) {
        return axios.delete(`shipping-method/${id}`)
    }
}
