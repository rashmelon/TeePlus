import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`price-combination/${filters}`)
    },

    view(id) {
        return axios.get(`price-combination/${id}`)
    },

    create(data) {
        return axios.post(`price-combination`, data)
    },

    update(id, data) {
        return axios.post(`price-combination/${id}`, data)
    },

    delete(id) {
        return axios.delete(`price-combination/${id}`)
    }
}
