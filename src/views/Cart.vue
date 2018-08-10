<template>
<div>
  <h1>Product list</h1>

  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col"></th>
        <th scope="col">Porduct</th>
        <th scope="col">Quantity</th>
        <th scope="col">Cost</th>
      </tr>
    </thead>
    <tbody v-if="this.cart.length>0">
     <CartItem 
      v-for="(item, index) in this.cart" 
      :key="index"
      :item="{item}"></CartItem>
      
      <tr>
        <td></td>
        <td><td>
        <td class="bg-success">Total:  ${{ sumOfCart }}</td>
      </tr>
    </tbody>
  </table>

  <button class="btn btn-large btn-primary btn-block" style="margin-top: 50px" @click="buy">Buy</button>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import CartItem from '../components/CartItem'

export default {
  computed:{
    ...mapGetters([
      'sumOfCart'
    ]),
    ...mapState([
      'cart'
    ]) 
  },
  methods: {
    ...mapActions(['buy'])
  },
  components: {
    CartItem
  }
}
</script>

<style>

</style>
