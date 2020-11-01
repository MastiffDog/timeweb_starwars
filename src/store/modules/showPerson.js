export default {
    actions: {
        setNewPersonState(ctx) {
            ctx.commit('updateShowSelectedPerson')
        }
    },
    mutations: {
        updateShowSelectedPerson(state) {
            state.showSelectedPerson = !state.showSelectedPerson 
        }
    },
    state: {
        showSelectedPerson: false
    },
    getters: {
        showPerson(state) {
            return state.showSelectedPerson
        }
    },
}