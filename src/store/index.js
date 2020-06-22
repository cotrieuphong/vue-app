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
    ],
    items: [
      {
        id: 1,
        title: "Todos App",
        url: "todo"
      },
      {
        id: 2,
        title: "Axios",
        url: "list"
      }
    ]
  },
  mutations: {
    LOADER_CTRL(state, value) {
      return (state.loader = value);
    },
    ADD_TODO(state, value) {
      let newTodo = {
        id: "",
        task: value,
        completed: false
      };
      return (state.todos = [newTodo, ...state.todos]);
    }
  },
  actions: {
    loaderControl({ commit }, value) {
      commit("LOADER_CTRL", value);
    },
    addTodo({ state, commit }, value) {
      commit("ADD_TODO", value);
    }
  },
  modules: {},
  getters: {
    loaderStatus: state => state.loader,
    todosLenght: state => state.todos.length,
    getItems: state => state.items
  }
});
