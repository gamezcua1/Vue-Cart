<template>
  <div class="container">
    <input type="text" class="form-control" placeholder="Product name" v-model="name">
    <input type="number" class="form-control" placeholder="Cost" v-model="cost">
    <input type="number" class="form-control" placeholder="Existence" v-model="existence">
    <input type="text" class="form-control" placeholder="Product photo" v-model="photoURL">
    <button>Guardar producto</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      name: "",
      cost: null,
      existence: null,
      photoURL: ""
    }
  }
}
</script>

<style>

</style>
