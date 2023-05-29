<template>
  <header>
    <router-link to="/CartPage">
      <button type="button">
        <img src="../assets/shopping-bag.png" /></button
    ></router-link>
  </header>
</template>

<script>
export default {
  name: "Cart",
};
</script>
<style scoped>
button {
  color: white;
  width: auto;
  height: 3em;
  background-color: #46330000;
  font-size: 1em;
  border: none;
}
img {
  border-radius: 1em;
  width: auto;
  height: 2.5em;
  cursor: pointer;
}
</style>
