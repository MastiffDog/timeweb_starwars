import Vue from "vue";
import Vuex from "vuex";
import dispatchPerson from "./modules/dispatchPerson";
import dispatchFilms from "./modules/dispatchFilms";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dispatchPerson,
    dispatchFilms,
  },
})
