import axios from "../../axios"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`city${filters}`)
    },

    view(id) {
        return axios.get(`city/${id}`)
    },

    create(data) {
        return axios.post(`city`, data)
    },

    update(id, data) {
        return axios.post(`city/${id}`, data)
    },

    delete(id) {
        return axios.delete(`city/${id}`)
    }
}
