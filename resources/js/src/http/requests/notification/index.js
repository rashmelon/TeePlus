import axios from "../../axios/index.js"
export default {
    getAll() {
        return axios.get(`notification`)
    },

    markAsRead() {
        return axios.post(`notification/mark-as-read`)
    },
}
