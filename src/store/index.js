import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loader: true,
    todos: [
      {
        id: 1,
        task: "Code for 30 minute",
        completed: false
      },
      {
        id: 2,
        task: "Drink a cup of coffee",
        completed: false
      },
      {
        id: 3,
        task: "Listen to music for 5 minute",
        completed: false
      }
    ]
  },
  mutations: {
    LOADER_CTRL(state, value) {
      return (state.loader = value);
    }
  },
  actions: {
    loaderControl({ state, commit }, value) {
      if (state.loader) {
        commit("LOADER_CTRL", value);
      }
    }
  },
  modules: {},
  getters: {
    loaderStatus: state => {
      return state.loader;
    }
  }
});
