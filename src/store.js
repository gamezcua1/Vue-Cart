import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //State
  state: {
    bdd: {
      prod1: {
        name : "Solar protector",
        cost: 3.2,
        existence: 4,
        photoURL: "https://www.nivea.co.uk/~/images/media-center-items/c/5/e-274660-2.jpg?mw=293"
      },
      prod2: {
        name: "Chocolate 1",
        cost: 10,
        existence: 100,
        photoURL: "https://mejorconsalud.com/wp-content/uploads/2015/04/Curiosidades-sobre-el-chocolate-negro.jpg"
      },
      prod3: {
        name: "Choco 2",
        cost: 2.5,
        existence: 1,
        photoURL: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg"
      }
    },
    cart: []
  },

  //Mutations
  mutations: {
    addToCart(state, product){
      state.cart.push(product)
    },
    removeTodo(state, product) {
      state.cart.splice(state.cart.indexOf(product), 1)
    },
  },
  
  //Actions
  actions: {
    addToCart({ commit }, product){
      commit('addToCart', product)
    }
  },


})
