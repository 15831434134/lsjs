import { CHANGE_ID, ADD_ID, ADD_TODOS } from '../mutation-types'
export const modulesA = {
  namespaced: true,
  state: {
    id: 1,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },

  getters: {
    getId: (state) => state.id,
    doneTodos: (state) => (status) => {
      return state.todos.filter((todo) => todo.done == status)
    },
    doneTodosCount:
      (_, { doneTodos }) =>
      (status) => {
        return doneTodos(status).length
      }
  },

  mutations: {
    [CHANGE_ID](state, value) {
      state.id = value
    },
    [ADD_ID](state) {
      return state.id++
    },

    [ADD_TODOS](state, { value }) {
      return state.todos.push({ ...value })
    }
  },

  actions: {
    dealy({ commit }, value) {
      return new Promise((resolve) => {
        commit(ADD_TODOS, value)
        resolve(value)
      })
    },

    dealyB({ dispatch }, value) {
      return new Promise((reslove) => {
        return dispatch('dealy', value).then((value) => {
          reslove(value)
        })
      })
    }
  }
}
