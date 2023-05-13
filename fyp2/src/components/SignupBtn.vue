<template>
  <div>
    <button class="SignupBtn" @click.prevent="signup()">Sign Up</button>
  </div>
</template>

<script>
export default {
  name: "SignupBtn",

  methods: {
    signup() {
      // Handle login logic
    },
  },
};
</script>

<style scoped>
.SignupBtn {
  background-color: #c19520;
  border: none;
  color: white;
  padding: 10px 0px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 0px;
  cursor: pointer;
  border-radius: 5px;
  width: 95%;
  font-weight: bold;
}
div {
  text-align: center;
}
button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
</style>
