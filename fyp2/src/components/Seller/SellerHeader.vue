<template>
  <header>
    <nav>
      <router-link to="../SellerLogin"><p>hello world</p></router-link>
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
.navcenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navright {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
div img {
  border-radius: 2em;
  width: auto;
  height: 4em;
  cursor: pointer;
}
</style>
