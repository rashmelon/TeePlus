import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`user-product${filters}`)
    },

    view(id) {
        return axios.get(`user-product/${id}`)
    },

    create(data) {
        return axios.post(`user-product`, data)
    },

    update(id, data) {
        console.log(id)
        console.log(data)
        return axios.post(`user-product/${id}`, data)
    },

    delete(id) {
        return axios.delete(`user-product/${id}`)
    }
}
