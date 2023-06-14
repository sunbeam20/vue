<template>
  <header class="sticky-header">
    <nav>
      <div class="navleft">
        <router-link to="/">
          <img src="../../assets/logo.png" alt="Logo" />
        </router-link>
        <router-link to="/SellerHome" exact class="link">
          <h1>Seller Hub</h1>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SellerHeader",
  components: {},
};
</script>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #463300e3;
  padding-right: 2em;
}
.navleft {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

div img {
  border-radius: 2em;
  width: auto;
  height: 4em;
  cursor: pointer;
  padding: 0.2em;
}
h1 {
  color: rgb(222, 179, 51);
  margin-left: 1em;
}
.link {
  text-decoration: none;
}
</style>
