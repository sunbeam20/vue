<template>
  <div class="counter-container">
    <button @click="decrementQuantity" class="counter-button">-</button>
    <span class="counter-quantity">{{ quantity }}</span>
    <button @click="incrementQuantity" class="counter-button">+</button>
  </div>
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
.counter-container {
  border: 1px solid rgb(146, 146, 146);
  display: inline-flex; /* Use inline-flex to adjust vertical alignment */
  align-items: center; /* Center the content vertically */
  text-align: center;
  background-color: #ffffff;
  color: #000000;
  margin-left: 1em;
  height: 100%;
  border-radius: 5px;
}

.counter-button,
.counter-quantity {
  background-color: #ffffff;
  font-weight: bolder;
  font-size: 1.1rem;
  padding: 0.25rem 0.1rem;
  width: 2rem;
  height: 100%;
  border: none;
  border-radius: 5px;
}

.counter-button {
  cursor: pointer;
}

.counter-button:hover {
  background-color: #000000;
  color: #ffffff;
}
</style>
