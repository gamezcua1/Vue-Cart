<template id="product">
  <div class="media product">
    <img class="mr-3 img-fluid align-self-center" width="100" :src="product.product.photoURL" alt="Generic placeholder image" >
    <div class="media-body">
      <h5 class="mt-0"> Name: {{product.product.name}}</h5>
      <h6>Cost: {{ product.product.cost}}</h6>
      <h6>Existence: {{ product.product.existence}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style>
  .product{
    border-color: rgb(128, 43, 43);
    border-width: 3px;
    margin: 10px;
  }
</style>
