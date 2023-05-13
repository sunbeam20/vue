<template>
  <header>
    <button><img :src="image" />{{ text }}</button>
  </header>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    image: String,
  },
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
