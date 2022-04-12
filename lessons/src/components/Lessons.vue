<template>
  <main>
    <div v-for="product in products" :key="product.id">
      <figure>
        <img class="lessonImage" v-bind:src="product.image" />
      </figure>
      <h2>Subject: {{ product.name }}</h2>
      <p>Location: {{ product.location }}</p>
      <p>Price: £{{ product.price }}</p>
      <p>Spaces available: {{ product.spaces }}</p>
      <button @click="addProduct(product)">Add to Cart</button>
    </div>
  </main>
</template>
<script>
export default {
  name: "ProductList",
  props: ["products"],
  data() {
    return {};
  },
  methods: {
    addProduct(product) {
      if (product.spaces > 0) {
        this.$emit("addProduct", product);
        product.spaces--;
      }
    },
  },
};
</script>
