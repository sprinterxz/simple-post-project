import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    information :{},

}
const actions = {

}
const mutations = {
    SET_INFORMATION(state,payload){
        state.information = payload
    },
    DELETE_INFORMATION(state){
        state.information = {}
    },


}
const getters = {
    getInformation : state => state.information,
}

export default {
    state,
    actions,
    mutations,
    getters
}