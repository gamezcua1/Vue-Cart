<template>
  <div v-if="product==null">
    <h1>Producto no encontrado</h1>
  </div>
  <div v-else>
    <div class="container" id="view">
      <div class="row">
        <div class="col-lg-6">
          <img :src="product.photoURL" class="img img-fluid">
        </div>
        <div class="col-lg-6">
          <h1 class="title">{{ product.name }}</h1>
          <h4>{{ product.description }}</h4>
          <h4 class="cost">${{ product.cost }}</h4>
          <h6 class="cost">Existences: {{ product.existence }}</h6>

          <div class="input-group mb-3">
            <input 
              type="number" 
              class="form-control" 
              placeholder="Quantity" 
              v-model="quantity"
              :disabled="product.existence-1 < quantity">
            <div class="input-group-append">
              <button 
                class="btn btn-primary" 
                :disabled="product.existence<=0" 
                @click="addCart"
              >Add to cart</button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from "../router";

export default {
  props: ['id'],
  computed: mapState([
    'bdd'
  ]),
  data(){
    return{
      product: null,
      quantity: 1,
    }
  },
  mounted: function(){
    this.product = this.bdd[this.id-1] 
  },
  updated: function(){
    if(this.quantity >= this.product.existence)
      this.quantity = this.product.existence
  },
  methods: {
    ...mapActions(['addToCart']),

    addCart : function(){
      this.addToCart([this.product, this.quantity]);
      router.push({ name: 'cart' });      
    }
  }
}
</script>

<style>
  #view{
    text-align: left;
  }
  .title{
    font-weight: bold;

  }
</style>
