<template>
  <div id="app">
    <header>
      <h1>{{ sitename }}</h1>
      <button @click="showCheckout">{{ this.cartLength }} Checkout</button>
    </header>
    <main>
      <check-out
        v-if="showCheckoutPage"
        :cart="cart"
        @removeProduct="removeProduct"
      ></check-out>
      <product-list
        :products="products"
        @addProduct="addToCart"
        v-else
      ></product-list>
    </main>
  </div>
</template>

<script>
import ProductList from "./components/Lessons.vue";
import CheckOut from "./components/Checkout.vue";

export default {
  name: "App",
  data() {
    return {
      showCheckoutPage: false,
      cartLength: 0,
      sitename: "Vue.js Lessons",
      cart: [],
      products: [
        {
          id: 1001,
          name: "Maths",
          location: "London",
          price: 50,
          image: "math.png",
          spaces: 5,
          inCart: 0,
        },
        {
          id: 1002,
          name: "English",
          location: "Birmingham",
          price: 40,
          image: "english.png",
          spaces: 5,
          inCart: 0,
        },
        {
          id: 1003,
          name: "Physics",
          location: "Enfield",
          price: 45,
          image: "science.jpeg",
          spaces: 5,
          inCart: 0,
        },
        {
          id: 1004,
          name: "Chemistry",
          location: "Birmingham",
          price: 50,
          image: "science.jpeg",
          spaces: 5,
          inCart: 0,
        },
        {
          id: 1005,
          name: "French",
          location: "Brighton",
          price: 45,
          image: "french.jpeg",
          spaces: 5,
          inCart: 0,
        },
        {
          id: 1006,
          name: "Geography",
          location: "London",
          price: 50,
          image: "geography.jpeg",
          spaces: 5,
          inCart: 0,
        },
        {
          id: 1007,
          name: "Statistics",
          location: "Basildon",
          price: 50,
          image: "math.png",
          spaces: 5,
          inCart: 0,
        },
        {
          id: 1008,
          name: "IT",
          location: "London",
          price: 40,
          image: "IT.png",
          spaces: 5,
          inCart: 0,
        },
        {
          id: 1009,
          name: "History",
          location: "Bournemouth",
          price: 40,
          image: "history.jpeg",
          spaces: 5,
          inCart: 0,
        },
        {
          id: 1010,
          name: "Biology",
          location: "Birmingham",
          price: 45,
          image: "science.jpeg",
          spaces: 5,
          inCart: 0,
        },
      ],
    };
  },
  methods: {
    showCheckout() {
      this.showCheckoutPage = this.showCheckoutPage ? false : true;
    },
    addToCart(product) {
      let added = false;
      this.cart.forEach((product2) => {
        if (product2.id === product.id) {
          product.inCart++;
          added = true;
        }
      });
      if (!added) {
        this.cart.push(product);
        product.inCart = 1;
      }
      this.cartLength++;
    },
    removeProduct(product) {
      this.cart.forEach((product2) => {
        if (product2.id === product.id && product.inCart > 0) {
          product.spaces++;
          product.inCart--;
          this.cartLength--;
        }
        if (product.inCart == 0) {
          this.cart.splice(this.cart.indexOf(product),1);
        }
      });
    },
  },
  components: {
    ProductList,
    CheckOut,
  },
};
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
