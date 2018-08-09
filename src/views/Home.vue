<template>
  <div class="home">
    <h1 style="text-align: center">Home page </h1>
    <div class="container">
      <div class="row">
        <ProductSample v-for="(product, key) in this.bdd" :key="key" v-bind:product="{product}"></ProductSample>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductSample from "../components/ProductSample";

export default {
  name: 'home',
  computed: mapState([
    'bdd'
  ]),
  components:{
    ProductSample
  }
}
</script>
