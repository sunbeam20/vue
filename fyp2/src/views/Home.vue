<template>
  <div class="product-list">
    <h1 class="h1">Products</h1>
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
    <div class="view-more">
      <router-link to="/Results" exact class="link">
        <h2 class="h2">View More <img src="../assets/more.png" /></h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";

const categories = [
  {
    name: "All",
  },
  {
    name: "Brand",
  },
  {
    name: "Shop",
  },
  {
    name: "Top",
  },
  {
    name: "New",
  },
];
const products = [
  {
    id: 1,
    name: "Luxury White Bottle Reusable Cheap",
    price: "$19.99",
    image: require("@/assets/1.png"),
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    image: require("@/assets/1.png"),
  },
  {
    id: 3,
    name: "Product 3",
    price: "$39.99",
    image: require("@/assets/1.png"),
  },
  {
    id: 4,
    name: "Product 4",
    price: "$49.99",
    image: require("@/assets/1.png"),
  },
  {
    id: 5,
    name: "Product 5",
    price: "$59.99",
    image: require("@/assets/1.png"),
  },
  {
    id: 6,
    name: "Product 6",
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    id: 7,
    name: "Product 7",
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    id: 8,
    name: "Product 8",
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    id: 9,
    name: "Product 9",
    price: "$69",
    image: require("@/assets/1.png"),
  },
  {
    id: 10,
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
      categories,
    };
  },
};
export { products, categories };
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
  background-color: rgb(235, 235, 235);
}
.view-more {
  width: 100%;
  margin-right: 2em;
}
</style>
