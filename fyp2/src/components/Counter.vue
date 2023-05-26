<template>
  <button @click="decrementQuantity" class="counter-button">-</button>
  <span class="counter-quantity">{{ quantity }}</span>
  <button @click="incrementQuantity" class="counter-button">+</button>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>

<style scoped>
.counter-button {
  font-size: 0.5em;
  background-color: #ffffff;
  color: #000000;
  border-radius: 20%;
  padding: 0.5em;
  margin: 0em;
  margin-top: 0%;
  cursor: pointer;
  width: 2em;
}
.counter-button:hover {
  background-color: #555555;
  color: #ffffff;
}
.counter-quantity {
  font-size: 0.5em;
  margin: 0em;
  border: 0.15em solid;
  padding: 0.5em;
  border-radius: 4px;
  width: 2em;
  background-color: #ffffff;
}
</style>
