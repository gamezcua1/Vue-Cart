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
        <td>Total: ${{ sumOfCart }}</td>
      </tr>
    </tbody>
  </table>

</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
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
  mounted: function(){

  },
  components: {
    CartItem
  }
}
</script>

<style>

</style>
