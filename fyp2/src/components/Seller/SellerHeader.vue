<template>
  <header>
    <nav>
      <div class="navleft">
        <img src="../../assets/logo.png" alt="Logo" />

        <h1>Seller Hub</h1>
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
nav {
  border-radius: 2em;
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
}
h1 {
  color: rgb(222, 179, 51);
  font-size: 2em;
  margin-left: 1em;
}
</style>
