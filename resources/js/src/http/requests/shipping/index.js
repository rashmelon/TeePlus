import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`shipping${filters}`)
    },

    view(id) {
        return axios.get(`shipping/${id}`)
    },

    create(data) {
        return axios.post(`shipping`, data)
    },

    update(id, data) {
        return axios.post(`shipping/${id}`, data)
    },

    delete(id) {
        return axios.delete(`shipping/${id}`)
    }
}
