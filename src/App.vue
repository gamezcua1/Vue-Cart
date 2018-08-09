<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'create-product' }">Create Product</router-link> |
      <router-link :to="{ name: 'cart' }">My Cart</router-link>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  margin-right: 10%;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
