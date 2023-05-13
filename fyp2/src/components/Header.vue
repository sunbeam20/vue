<template>
  <header>
    <nav>
      <div class="navleft">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Logo" />
        </router-link>
        <Categories />
      </div>
      <div class="navcenter">
        <Search />
      </div>
      <div class="navright">
        <Cart />
        <Button :image="require('@/assets/user.png')" />
      </div>
    </nav>
  </header>
</template>

<script>
import Button from "./Button";
import Cart from "./Cart";
import Categories from "./Categories";
import Search from "./Search";

export default {
  name: "Header",
  components: {
    Button,
    Cart,
    Categories,
    Search,
  },
};
</script>

<style scoped>
nav {
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #463300e3;
  padding-right: 20px;
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
  border-radius: 10px;
  width: auto;
  height: 50px;
  cursor: pointer;
}
</style>
