<template>
  <header class="sticky-header">
    <nav>
      <div class="navleft">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo" />
        </router-link>
        <Categories />
      </div>
      <div class="navcenter">
        <Search />
      </div>
      <div class="navright">
        <div>
          <router-link to="/SellerLogin"> <button>Seller Hub</button></router-link>
        </div>

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
.sticky-header {
  position: sticky;
  z-index: 9999;
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
.navcenter {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10em;
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
button {
  width: auto;
  height: 3em;
  background-color: #46330000;
  font-size: 1.2em;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  text-decoration: underline;
}
</style>
