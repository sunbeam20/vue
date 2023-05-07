<template>
  <header>
    <h1>hello world</h1>
    <Button />
    <Cart />
  </header>
</template>

<script>
import Button from "./Button";
import Cart from "./Cart";

export default {
  name: "Header",
  components: {
    Button,
    Cart,
  },
};
</script>
