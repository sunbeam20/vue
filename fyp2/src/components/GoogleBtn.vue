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
  padding: 0.6em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.3em;
  margin: 0.3em;
  cursor: pointer;
  border-radius: 5px;
  width: 40%;
}

img {
  width: 1em;
  height: auto;
  margin-right: 0.7em;
  vertical-align: middle;
}
</style>
