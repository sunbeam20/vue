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
    price: "$19.99",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 2",
    price: "$29.99",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 3",
    price: "$39.99",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 4",
    price: "$49.99",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 5",
    price: "$59.99",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 6",
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 7",
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 8",
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 9",
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    name: "Product 10",
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
  gap: 10px;
  margin: 20px 100px 20px 100px;
  padding: 20px 0px 20px 20px;
  flex-direction: row;
  background-color: bisque;
}
.view-more {
  width: 100%;
  margin-right: 40px;
}
</style>
