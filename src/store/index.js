import Vue from 'vue'
import Vuex from 'vuex'
import showPerson from './modules/showPerson'
import dispatchPerson from './modules/dispatchPerson'
import dispatchFilms from './modules/dispatchFilms'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        showPerson,
        dispatchPerson,
        dispatchFilms
    }
})