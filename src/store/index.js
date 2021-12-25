import { createStore } from 'vuex'

export default createStore({
  state: {
    userLogged: null,
    cart: [
      {
        "id": 1,
        "title": "Samsung Galaxy S21 Ultra 5G",
        "image": "/images/samsung-galaxy-s21-ultra-1_1.jpg",
        "price": 30990000,
        "quantity": 1
      }
    ]
  },
  mutations: {
    login(state, userData) {
      state.userLogged = {
        name: userData.name
      }
    },
    logout(state) {
      state.userLogged = null
    },
    updateCart(state, data) {
      state.cart = data
    }
  },
  actions: {
  },
  modules: {
  }
})
