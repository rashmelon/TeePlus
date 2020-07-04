import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`print-criteria/${filters}`)
    },

    view(id) {
        return axios.get(`print-criteria/${id}`)
    },

    create(data) {
        return axios.post(`print-criteria`, data)
    },

    update(id, data) {
        return axios.post(`print-criteria/${id}`, data)
    },

    delete(id) {
        return axios.delete(`print-criteria/${id}`)
    }
}
