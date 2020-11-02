export default {
  actions: {
    setNewPerson(ctx, person) {
      ctx.commit("updatePerson", person);
    },
  },
  mutations: {
    updatePerson(state, person) {
      state.person = { ...person };
    },
  },
  state: {
    person: {},
  },
  getters: {
    getPerson(state) {
      return state.person;
    },
  },
};
