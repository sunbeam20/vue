<template>
  <button @click="buyNow" class="buy-now">Buy Now</button>
</template>

<script>
export default {
  name: "buyNow",
  methods: {
    buyNow() {
      // Do something when the button is clicked, like adding the product to the cart
      // You can access the product data via props
      this.$emit("buy-now");
    },
  },
};
</script>

<style scoped>
.buy-now {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.buy-now:hover {
  background-color: #000000;
  color: #ffffff;
}
</style>
