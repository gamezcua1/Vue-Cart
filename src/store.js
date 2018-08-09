import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //State
  state: {
    bdd: {
      prod1: {
        id: 1,
        name : "Solar protector",
        description: "A really nice solar protector that will make you blonde af",
        cost: 3.2,
        existence: 4,
        photoURL: "https://www.nivea.co.uk/~/images/media-center-items/c/5/e-274660-2.jpg?mw=293"
      },
      prod2: {
        id: 2,
        name: "Chocolate 1",
        description: "A magic chocolate that will make you fly ",
        cost: 10,
        existence: 100,
        photoURL: "https://mejorconsalud.com/wp-content/uploads/2015/04/Curiosidades-sobre-el-chocolate-negro.jpg"
      },
      prod3: {
        id: 3,
        name: "Choco 2",
        description: "This chocolate will give you the ability to see through walls",
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
      let item = {...product[0] }
      item['quantity'] = product[1]

      console.log(item);
      
      commit('addToCart', item)
    }
  },

  getters: {
    sumOfCart : state => {
      let sum = 0;
      state.cart.forEach(item => {
        sum += item.cost*item.quantity
      });
      return sum;
    }
  }
})
