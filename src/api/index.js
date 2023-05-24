import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";
// import _ from 'lodash'

export default {
    getInformationList() {
        return axios.get().then(resp => {
            return  resp.data
        }).catch(err => {
            throw err
        })
    }
}