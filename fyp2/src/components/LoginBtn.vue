<template>
  <div>
    <button class="LoginBtn" @click.prevent="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "LoginBtn",

  methods: {
    login() {
      // Handle login logic
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
.LoginBtn {
  background-color: #614700ef;
  border: none;
  color: white;
  padding: 0.6em 0em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5em;
  margin: 0.5em 0.1em 0.1em 0.1em;
  cursor: pointer;
  border-radius: 1em;
  width: 95%;
  font-weight: bold;
}
button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
</style>
