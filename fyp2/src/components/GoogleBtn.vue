<template>
  <button class="google-button"><img src="../assets/google.png" />Google</button>
</template>

<script>
export default {
  name: "GoogleBtn",
};
</script>

<style scoped>
.google-button {
  background-color: #fff;
  border: 1px solid #ccc;
  color: #666;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 0px;
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
