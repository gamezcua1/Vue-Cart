<template>
  <div class="home">
    <h1>Home page </h1>
    <div v-for="(product, key) in this.bdd" :key="key">
      <ProductSample v-bind:product="{product}"></ProductSample>
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
