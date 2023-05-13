<template>
  <header>
    <h1>hello world</h1>
    <toLogin />
    <toSignup />
  </header>
</template>

<script>
import toLogin from "./toLogin";
import toSignup from "./toSignup";

export default {
  name: "Header",
  components: {
    toLogin,
    toSignup,
  },
};
</script>
