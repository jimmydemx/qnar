import Vue from 'vue'
import Vuex from 'vuex'
import city from './state'
import a from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state:city,
    actions:a.actions,
    mutations:a.mutations,
    getters:{
        doubleCity(state){
            return state.city+ " "+ state.city

        }
    }
})