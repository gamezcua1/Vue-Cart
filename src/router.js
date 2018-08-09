import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateProduct from './views/CreateProduct'
import ProductView from './views/ProductView'
import Cart from './views/Cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/createproduct',
      name: 'create-product',
      component: CreateProduct
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
      props: true,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    }
  ]
})
