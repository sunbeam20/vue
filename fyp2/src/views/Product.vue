<template>
  <div class="product-page">
    <div class="grid-container">
      <div class="item1"><img :src="products[0].image" :alt="products[0].name" /></div>
      <div class="item2"><img :src="products[0].image" :alt="products[0].name" /></div>
      <div class="item3"><img :src="products[0].image" :alt="products[0].name" /></div>
      <div class="item4"><img :src="products[0].image" :alt="products[0].name" /></div>
      <div class="item5"><img :src="products[0].image" :alt="products[0].name" /></div>
    </div>
    <div class="side-grid">
      <h1 class="sgspace">{{ products[0].name }}</h1>
      <h3 class="sgspace">4.8k Sold</h3>
      <h1 class="sgspace">Price {{ products[0].price }}</h1>
      <h1 class="sgspace">Color</h1>
      <h1 class="sgspace">Size</h1>
      <h1 class="sgspace">Quantity <Counter /></h1>
      <AddToCart
        :styleProp="myStyles"
        :hoverClass="'hover-effect'"
        textProp="Add To Cart"
      />
      <Buy />
    </div>
  </div>
</template>

<script>
import { products } from "@/views/Home";
import Counter from "../components/Counter.vue";
import AddToCart from "../components/AddToCart.vue";
import Buy from "../components/Buy.vue";

export default {
  name: "Product",
  components: {
    Counter,
    AddToCart,
    Buy,
  },
  data() {
    return {
      products: products,
      myStyles: {
        padding: "1em 1em",
        border: "1px solid black",
        borderRadius: "1em",
      },
    };
  },
};
</script>

<style scoped>
.hover-effect:hover {
  background-color: #000000;
  color: #ffffff;
}
.product-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: left; /* start product from left*/
  gap: 1em;
  margin: 2em 10em 2em 10em;
  padding: 2em 0em 2em 2em;
  flex-direction: row;
  background-color: bisque;
}
.grid-container {
  margin: 1em 4em;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1em;
  background-color: #ffffff00;
  width: 20%;
  height: auto;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}
.side-grid {
  height: 100%;
  width: 50%;
  margin-left: 10em;
}
.sgspace {
  padding-bottom: 1em;
}
.grid-container > div {
  background-color: rgba(255, 255, 255, 0);
  text-align: center;
  padding: 0em;
  font-size: 1em;
}

.item1 {
  grid-column: 1 / span 4;
}
.item1 img {
  width: 100%;
  height: auto;
}
.item2 img,
.item3 img,
.item4 img,
.item5 img {
  width: 100%;
  height: auto;
}
</style>
