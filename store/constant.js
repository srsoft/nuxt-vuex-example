export const state = () => ({
  todolist: [
    { todo: 'movie', done: false },
    { todo: 'car', done: false },
    { todo: 'house', done: false },
    { todo: 'land', done: false }
  ]
})

export const getters = {
  getTodoList (state) {
    return state.todolist
  },
  getHello (state) {
    return state.hello
  }
}

export const actions = {
  ACT_ADD_TODO ({ commit }, value) {
    commit('ADD_TODO', value)
  },
  ACT_DONE_TOGGLE ({ commit }, value) {
    commit('DONE_TOGGLE', value)
  },
  ACT_DELETE_TODO ({ commit }, value) {
    commit('DELETE_TODO', value)
  }
}

export const mutations = {
  ADD_TODO (state, payload) {
    state.todolist.push({ todo: payload.todo, done: payload.done })
  },
  DONE_TOGGLE (state, index) {
    state.todolist[index].done = !state.todolist[index].done
  },
  DELETE_TODO (state, index) {
    state.todolist.splice(index, 1)
  }
}
