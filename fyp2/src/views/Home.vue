<template>
  <div class="product-list">
    <h1 class="h1">Products</h1>
    <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
    <div class="view-more">
      <router-link to="/product" exact class="link">
        <h2 class="h2">View More <img src="../assets/more.png" /></h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Luxury White Bottle Reusable Cheap",
    selected: false,
    price: "$19.99",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 2",
    selected: false,
    price: "$29.99",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 3",
    selected: false,
    price: "$39.99",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 4",
    selected: false,
    price: "$49.99",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 5",
    selected: false,
    price: "$59.99",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 6",
    selected: false,
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 7",
    selected: false,
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 8",
    selected: false,
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 9",
    selected: false,
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 10",
    selected: false,
    price: "$69",
    image: require("@/assets/1.png"),
  },
];
export default {
  name: "App",
  components: {
    ProductCard,
  },
  data() {
    return {
      showContent: false,
      products,
    };
  },
};
export { products };
</script>

<style scoped>
.link {
  text-decoration: none;
  color: black;
}

.h1,
.h2 {
  width: 100%;
  cursor: pointer;
  text-decoration: none;
}

.h2 {
  text-align: right;
  cursor: pointer;
}

.h2 img {
  height: 10px;
  width: auto;
  cursor: pointer;
}

.h1:hover,
.h2:hover,
.h2 img:hover {
  text-decoration: underline;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  /* start product from left*/
  align-items: center;
  gap: 1em;
  margin: 2em 10em 2em 10em;
  padding: 2em 1em 2em 1em;
  flex-direction: row;
  background-color: bisque;
}
.view-more {
  width: 100%;
  margin-right: 2em;
}
</style>
