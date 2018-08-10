import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //State
  state: {
    bdd: [
      {
        id: 1,
        name : "Solar protector",
        description: "A really nice solar protector that will make you blonde af",
        cost: 3.2,
        existence: 4,
        photoURL: "https://www.nivea.co.uk/~/images/media-center-items/c/5/e-274660-2.jpg?mw=293"
      },
      {
        id: 2,
        name: "Chocolate 1",
        description: "A magic chocolate that will make you fly ",
        cost: 10,
        existence: 100,
        photoURL: "https://mejorconsalud.com/wp-content/uploads/2015/04/Curiosidades-sobre-el-chocolate-negro.jpg"
      },
      {
        id: 3,
        name: "Choco 2",
        description: "This chocolate will give you the ability to see through walls",
        cost: 2.5,
        existence: 1,
        photoURL: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg"
      }
    ],
    cart: [],
  },

  //Mutations
  mutations: {
    addToCart(state, product){
      state.cart.push(product)
    },
    
    addProduct(state, product){
      state.bdd.push(product)
    },

    makePurchase(state){
      state.cart.forEach(item => {
        state.bdd[item.id-1].existence-=item.quantity;
      });
      state.cart = []
    },
  },
  
  //Actions
  actions: {
    addToCart({ commit }, product){
      let item = {...product[0] }
      item['quantity'] = product[1]

      
      commit('addToCart', item)
    },

    addProduct({ commit }, product){
      let item = {...product}
      item['id'] = Object.keys(this.state.bdd).length+1
      
      commit('addProduct', item)
    },

    buy({ commit }){
      commit('makePurchase')
    },

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
