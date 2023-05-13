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
  font-size: 1.2rem;
  background-color: #ffffff;
  color: #000000;
  border-radius: 4px;
  padding: 0.5rem;
  margin: 0rem;
  margin-top: 0%;
  cursor: pointer;
  width: 30px;
}
.counter-button:hover {
  background-color: #000000;
  color: #ffffff;
}
.counter-quantity {
  font-size: 1.2rem;
  margin: 0rem;
  border: 2px solid;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  width: 30px;
  background-color: #ffffff;
}
</style>
