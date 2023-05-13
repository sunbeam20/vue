<template>
  <router-link to="/SignupForm">
    <button @click="showContent = true">Sign Up</button><br />
  </router-link>
</template>

<script>
export default {
  name: "toSignup",
  data() {
    return {
      showContent: false,
    };
  },
};
</script>
