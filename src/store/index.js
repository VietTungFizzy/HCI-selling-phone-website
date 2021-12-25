import { createStore } from 'vuex'

export default createStore({
  state: {
    userLogged: null
  },
  mutations: {
    login(state, userData) {
      state.userLogged = {
        name: userData.name
      }
    },
    logout(state) {
      state.userLogged = null
    }
  },
  actions: {
  },
  modules: {
  }
})
