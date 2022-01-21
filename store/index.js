// import createPersistedState from 'vuex-persistedstate'

export const state = () => ({
  test1: 'test1 - 2초후',
  test2: 'test2'
})

export const mutations = {
  SET_TEST1 (state, value) {
    state.test1 = value
  },
  SET_TEST2 (state, value) {
    state.test2 = value
  }
}

export const actions = {
  TIME ({ commit }, value) {
    return setTimeout(() => {
      commit('SET_TEST1', value)
    }, 1000)
  }
}

export const getters = {

}
