import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`design${filters}`)
    },

    view(id) {
        return axios.get(`design/${id}`)
    },

    create(data) {
        return axios.post(`design`, data)
    },

    update(id, data) {
        return axios.post(`design/${id}`, data)
    },

    delete(id) {
        return axios.delete(`design/${id}`)
    }
}
