<template>
  <div class="app">
    <Header v-if="isCustomerRoute" />
    <SellerHeader v-if="isSellerRoute" />
    <router-view></router-view>
    <Footer v-if="isCustomerRoute" />
  </div>
</template>

<script>
import Header from "./components/Header";
import SellerHeader from "./components/Seller/SellerHeader.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    SellerHeader,
    Footer,
  },

  computed: {
    isSellerRoute() {
      const currentRoute = this.$route;
      return currentRoute.meta.group === "seller";
    },
    isCustomerRoute() {
      const currentRoute = this.$route;
      return currentRoute.meta.group === "customer";
    },
  },
};
</script>
<style></style>
