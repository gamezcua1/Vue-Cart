<template>
  <div  class="col-md-4">
    <div class="card" style="max-width: 18rem;">
      <img class="card-img-top" :src="product.product.photoURL" alt="product image">
      <div class="card-body">
        <h5 class="card-title">{{ product.product.name }}</h5>
        <router-link :to="{ name: 'product', params: { id: product.product.id }}" class="btn btn-primary">Full product</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
}
</script>

<style>
#product{
  margin: 100px;
}
</style>
