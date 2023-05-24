import Vue from 'vue'
import Vuex from 'vuex'

import dataStore from "@/store/module/dataStore";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        dataStore
    }
})