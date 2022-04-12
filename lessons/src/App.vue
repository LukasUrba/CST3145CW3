<template>
  <div id="app">
    <header>
      <h1>{{sitename}}</h1>
      <button @click="showCheckout">{{this.cart.length}} Checkout</button>
    </header>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <main>
      <product-list @addProduct='addToCart'></product-list>
      <check-out :cart="cart" @removeProduct='removeProduct'></check-out>
    </main>
  </div>
</template>

<script>
import ProductList from "./components/Lessons.vue";
import CheckOut from "./components/Checkout.vue";

export default {
  name: 'App',
  data() {
    return {
      sitename: "Vue.js Lessons",
      cart: []
    }
  },
  methods: {
    showCheckout() {
    },
    addToCart(product) {
      this.cart.push(product);
    },
    removeProduct(product) {
      this.cart.some(products => {
        if(products.id === product.id){
          product.spaces++;
          this.cart.splice(this.cart.indexOf(product),1)
        }
      });
    }
  },
  components: {
    ProductList,
    CheckOut
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
