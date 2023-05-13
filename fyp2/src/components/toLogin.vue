<template>
  <router-link to="/LoginForm">
    <button @click="showContent = true">Log in</button><br />
  </router-link>
</template>

<script>
export default {
  name: "toLogin",
  data() {
    return {
      showContent: false,
    };
  },
};
</script>
