<template>
  <header>
    <button type="button">
      <img src="../assets/shopping-bag.png" />
    </button>
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
  height: 50px;
  background-color: #46330000;
  font-size: 18px;
  border: none;
}
img {
  border-radius: 10px;
  width: auto;
  height: 30px;
  cursor: pointer;
}
</style>
