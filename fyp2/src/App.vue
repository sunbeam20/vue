<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
img.hover-effect {
  transition: transform 0.3s ease;
}

img.hover-effect:hover {
  transform: scale(1.1);
}
</style>
