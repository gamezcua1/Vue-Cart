<template>
  <div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Name</label>
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group col-md-6">
        <label>Description</label>
        <input type="text" class="form-control" v-model="description">
      </div>
      <div class="form-group col-md-6">
        <label>Cost</label>
        <input type="number" class="form-control" v-model="cost">
      </div>
      <div class="form-group col-md-6">
        <label>Existence</label>
        <input type="number" class="form-control" v-model="existence">
      </div>
      <div class="form-group col-md-12">
        <label>Photo URL</label>
        <input type="text" class="form-control" v-model="photoURL">
      </div>
    </div>
    <button 
      class="btn btn-lg btn-block btn-primary" 
      @click="addProduct({name, description, cost, existence, photoURL})"
      >Create</button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  
  export default {
    data: function () {
      return {
        name: "",
        description: "",
        cost: null,
        existence: null,
        photoURL: ""
      }
    },
    methods: {
      ...mapActions(['addProduct'])
    }
  }
</script>

<style>
</style>