<template>
  <button class="facebook-button"><img src="../assets/facebook.png" />Facebook</button>
</template>

<script>
export default {
  name: "FacebookBtn",
};
</script>

<style scoped>
.facebook-button {
  background-color: #fff;
  border: 1px solid #ccc;
  color: #666;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  width: 40%;
}
img {
  width: 18px;
  height: auto;
  margin-right: 10px;
  vertical-align: middle;
}
</style>
