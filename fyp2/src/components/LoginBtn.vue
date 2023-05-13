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
.LoginBtn {
  background-color: #c19520;
  border: none;
  color: white;
  padding: 10px 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 0px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  font-weight: bold;
}
button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
</style>
