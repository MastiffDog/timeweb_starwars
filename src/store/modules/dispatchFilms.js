import axios from "axios";

export default {
  actions: {
    setFilms(ctx, urls) {
      let urlPromise = [];
      urls.forEach((url) => {
        urlPromise.push(axios.get(url));
      });
      Promise.all(urlPromise)
        .then((values) => {
          let films = [];
          values.forEach((film) => films.push(film.data.title));
          ctx.commit("updateFilms", films);
        })
        .catch((err) => {
          throw err;
        });
    },
  },
  mutations: {
    updateFilms(state, films) {
      state.films = [...films];
    },
  },
  state: {
    films: [],
  },
  getters: {
    getFilms(state) {
      return state.films;
    },
  },
};
